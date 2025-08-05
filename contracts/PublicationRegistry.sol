// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract PublicationRegistry {
    struct Publication {
        string cid;
        string doi;
        address author;
        uint256 timestamp;
    }

    Publication[] public publications;

    event PublicationAdded(uint256 indexed id, string cid, string doi, address indexed author, uint256 timestamp);

    function registerPublication(string calldata cid, string calldata doi) external {
        publications.push(Publication({
            cid: cid,
            doi: doi,
            author: msg.sender,
            timestamp: block.timestamp
        }));

        emit PublicationAdded(publications.length - 1, cid, doi, msg.sender, block.timestamp);
    }

    function getPublication(uint256 id) external view returns (string memory, string memory, address, uint256) {
        Publication memory pub = publications[id];
        return (pub.cid, pub.doi, pub.author, pub.timestamp);
    }

    function totalPublications() external view returns (uint256) {
        return publications.length;
    }
}
