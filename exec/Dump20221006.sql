-- MySQL dump 10.13  Distrib 8.0.28, for macos11 (x86_64)
--
-- Host: j7e102.p.ssafy.io    Database: e102
-- ------------------------------------------------------
-- Server version	8.0.30-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `achievements`
--

DROP TABLE IF EXISTS `achievements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `achievements` (
  `idx` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `description` varchar(100) NOT NULL,
  `condition` varchar(100) NOT NULL,
  PRIMARY KEY (`idx`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `achievements`
--

LOCK TABLES `achievements` WRITE;
/*!40000 ALTER TABLE `achievements` DISABLE KEYS */;
INSERT INTO `achievements` VALUES (1,'가','가가가가','가를만족'),(2,'나','나나나나','나를만족'),(3,'다','다다다다','다를만족'),(4,'라','라라라라','라를만족'),(5,'마','마마마마','마를만족'),(6,'바','바바바바','바를만족');
/*!40000 ALTER TABLE `achievements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items` (
  `idx` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(300) NOT NULL,
  `eng_name` varchar(45) DEFAULT NULL,
  `episode` int DEFAULT NULL,
  `chapter` int DEFAULT NULL,
  PRIMARY KEY (`idx`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  UNIQUE KEY `description_UNIQUE` (`description`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (1,'사건 현장에 있던 컵','현장의 거실 테이블 위에 놓여 있던컵. 많은 술병에 비해 컵은 단 하나만 놓여 있었다.','a',1,1),(2,'오종오의 전자담배','피해자가 외투 주머니에 소지하고 있던 전자담배. 평소에도 전자담배를 즐겨 폈던 것으로 보인다.','b',1,1),(3,'고장난 스탠드','피해자의 방 입구 양 옆에 있던 스탠드. 한 쪽의 스탠드 갓이 삐뚤어져 있었다.','c',1,1),(4,'오종오의 만년필','피해자의 방 안의 책상 위 볼펜들 사이에 놓여져 있던 만년필. 잉크가 다 소모된 것 같다.','d',1,3),(5,'니코틴 액상','피해자의 방 옷장 속 금고 안에 들어있던 니코틴 액상. 니코틴 원액으로 추정된다.','e',1,3),(6,'백지현의 물티슈','백지현이 화학 약품으로 직접 만든다는 물티슈. 인체에는 무해하지만 살균 효과가 뛰어나고 뭐든지 잘 닦이며 변기에 버려도 된다고 한다. 피해자와 만났던 모임에서도 이 물티슈를 들고 갔다.','f',1,4),(7,'오종오와 백지현의 사진','피해자와 백지현이 연인 사이였을 때 함께 찍은 사진. 백지현의 책장 안 액자에 들어 있었다. 한 달전에 헤어지게 됐지만 아직까지 좋아하는 마음을 가지고 있었다고 한다.','g',1,4),(8,'백지현의 장갑','결벽증을 가진 백지현이 끼고 다니는 장갑. 피해자의 손가락 무는 버릇을 고치기 위해 피해자에게도 장갑을 선물해줬다고 한다.','h',1,4),(9,'백지현의 옷걸이','백지현의 옷 방에 걸려져 있던 옷걸이. 백지현은 입었던 옷만 옷걸이에 걸고 빨래를 끝낸 옷은 개어 놓는다고 한다. 빨래를 모임이 끝나고 난 후에 해서 조사 당시에는 옷걸이에 걸려진 옷이 없었다.','i',1,4),(10,'임이지의 아이스볼 트레이','임이지가 아이스볼을 만들기 위해 사용하는 아이스볼 트레이. 양주나 칵테일을 마실 때 주로 사용하며, 피해자와 만났던 모임에서도 얼음을 얼려둔 채로 아이스박스에 넣어 들고 갔다. 깜빡했다가 뒤늦게 얼려서 모임에 늦었다고 한다.','j',1,5),(11,'임이지의 꿀 병','임이지가 양봉업자에게 직접 주문으로 산 꿀이 들어있는 페트병. 피해자와 만났던 모임에도 이 을 들고 갔다.','k',1,5),(12,'임이지의 다 쓴 치약','임이지가 피해자와의 모임에 들고 갔던 치약. 치약 내용물은 다 쓴 상태다.','l',1,5),(13,'임이지의 샤워기','임이지 집의 화장실에 있던 샤워기. 피해자가 몹쓸 짓을 시도하여 그 기억을 잊고자 계속 입을 씻어내려고 했다고 한다.','n',1,5),(14,'김세영의 통장','김세영의 방 서랍장 안에서 나온 통장. 김세영이 말한대로 피해자에게 조금씩 돈을 빌려줬으며, 그 금액이 모두 150만원에 달했다.','m',1,6),(15,'김세영의 붓','김세영의 작업실에 있는 붓. 오늘 아침에도 그림을 그리려고 하던 찰나에 연락을 받고 현장으로 불러갔다고 한다.','o',1,6),(16,'김세영의 선풍기','김세영의 작업실에 있는 선풍기. 유화를 빠르게 말리는 데에 사용한다고 한다.','p',1,6),(17,'김세영의 드라이버','김세영의 작업실에 있던 드라이버. 목공 공예에도 관심이 있어서 종종 나무 제품을 만드는데, 이 드라이버를 사용하여 만든다고 한다.','q',1,6),(18,'김세영의 작업실에 있던 드라이버. 목공 공예에도 관심이 있어서 종종 나무 제품을 만드는데, 이 드라이버를 사용하여 만든다고 한다.','임시윤의 컴퓨터에 꽂혀져 있던 USB. 피해자의 신상 정보에 대해 적힌 파일이 있다. 피해자가 예전에 임시윤에게 희귀 곤충 거래 사기를 쳤다고 한다.','r',1,7),(19,'임시윤의 가방에서 나온 핸드폰 충전기','임시윤의 가방에서 발견된 핸드폰 충전기. 원래는 피해자의 핸드폰 충전기이며, 골탕을 먹이기 위해 가져왔다고 한다.','s',1,7),(20,'임시윤의 노트','임시윤이 학부생 시절 심리학 수업을 정리해놓은 노트.','t',1,7),(21,'임시윤의 헤어 드라이기','임시윤의 베란다에서 발견된 헤어 드라이기. 평소에 베란다에서 머리를 말렸다고 하며, 다른 헤어 드라이기는 바람이 약해서 이것만 사용한다고 한다. 피해자와의 모임에서도 밤새 놀 것을 대비하여 머리를 감을 때 쓰기 위해 가져갔다고 한다.','u',1,7);
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `idx` bigint NOT NULL AUTO_INCREMENT,
  `user_id` varchar(30) NOT NULL,
  `episode` int DEFAULT '1',
  `chapter` int DEFAULT '1',
  `password` varchar(30) NOT NULL,
  PRIMARY KEY (`idx`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'aaa',2,2,''),(6,'bbb',2,1,'bbb1234'),(7,'sdfa',1,1,'sdgasgd'),(8,'ccc',4,2,'ccc1234'),(9,'ddd',1,1,'bbb'),(10,'asd',1,1,'asd'),(11,'asdf',1,5,'asdf'),(12,'chan123',0,1,'1234'),(13,'kmj5052',0,4,'df920504');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_achievements`
--

DROP TABLE IF EXISTS `users_achievements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_achievements` (
  `idx` bigint NOT NULL AUTO_INCREMENT,
  `user_id` varchar(30) NOT NULL,
  `name` varchar(30) NOT NULL,
  PRIMARY KEY (`idx`),
  KEY `fk-achievements-users_achievements` (`name`),
  KEY `fk-users-users_achivements` (`user_id`),
  CONSTRAINT `fk-achievements-users_achievements` FOREIGN KEY (`name`) REFERENCES `achievements` (`name`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk-users-users_achivements` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_achievements`
--

LOCK TABLES `users_achievements` WRITE;
/*!40000 ALTER TABLE `users_achievements` DISABLE KEYS */;
INSERT INTO `users_achievements` VALUES (1,'aaa','가'),(2,'aaa','나'),(3,'aaa','다');
/*!40000 ALTER TABLE `users_achievements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_items`
--

DROP TABLE IF EXISTS `users_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_items` (
  `idx` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `user_id` varchar(30) NOT NULL,
  `description` varchar(300) NOT NULL,
  `item_idx` bigint NOT NULL,
  `episode` int DEFAULT NULL,
  `chapter` int DEFAULT NULL,
  PRIMARY KEY (`idx`),
  KEY `fk-users-users_items` (`user_id`),
  KEY `fk-users_items_users_idx` (`name`,`description`,`item_idx`),
  CONSTRAINT `fk-users-users_items` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_items`
--

LOCK TABLES `users_items` WRITE;
/*!40000 ALTER TABLE `users_items` DISABLE KEYS */;
INSERT INTO `users_items` VALUES (10,'사건 현장에 있던 컵','aaa','현장의 거실 테이블 위에 놓여 있던컵. 많은 술병에 비해 컵은 단 하나만 놓여 있었다.',1,1,1),(11,'오종오의 전자담배','aaa','피해자가 외투 주머니에 소지하고 있던 전자담배. 평소에도 전자담배를 즐겨 폈던 것으로 보인다.',2,1,1),(12,'오종오의 전자담배2','aaa','피해자가 외투 주머니에 소지하고 있던 전자담배. 평소에도 전자담배를 즐겨 폈던 것으로 보인다.2',4,2,1),(13,'니코틴 액상','asdf','피해자의 방 옷장 속 금고 안에 들어 있던 니코틴 액상. 니코틴 원액으로 추정된다.',5,1,3),(14,'오종오와 백지현의 사진','asdf','피해자와 백지현이 연인 사이였을 때 함께 찍은 사진. 백지현의 책장 안 액자에 들어 있었다. 한 달 전에 헤어지게 됐지만 아직까지 좋아하는 마음을 가지고 있었다고 한다.',7,1,4),(15,'백지현의 물티슈','asdf','백지현이 화학 약품으로 직접 만든다는 물티슈. 인체에는 무해하지만 살균 효과가 뛰어나고 뭐든지 잘 닦이며 변기에 버려도 된다고 한다. 피해자와 만났던 모임에서도 이 물티슈를 들고 갔다.',6,1,4);
/*!40000 ALTER TABLE `users_items` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-06 17:36:30
