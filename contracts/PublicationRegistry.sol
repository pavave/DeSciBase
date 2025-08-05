// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract PublicationRegistry {
    struct Publication {
        string cid;         // IPFS CID (ссылка на публикацию)
        address author;     // Автор публикации
        uint256 timestamp;  // Когда добавлена
    }

    Publication[] public publications;

    event PublicationAdded(uint256 indexed id, string cid, address indexed author, uint256 timestamp);

    function addPublication(string calldata cid) external {
        publications.push(Publication({
            cid: cid,
            author: msg.sender,
            timestamp: block.timestamp
        }));

        emit PublicationAdded(publications.length - 1, cid, msg.sender, block.timestamp);
    }

    function getPublication(uint256 id) external view returns (string memory, address, uint256) {
        Publication memory pub = publications[id];
        return (pub.cid, pub.author, pub.timestamp);
    }

    function totalPublications() external view returns (uint256) {
        return publications.length;
    }
}
