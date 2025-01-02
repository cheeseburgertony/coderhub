/*
 Navicat Premium Data Transfer

 Source Server         : tony_connection
 Source Server Type    : MySQL
 Source Server Version : 80040 (8.0.40)
 Source Host           : localhost:3306
 Source Schema         : coderhub

 Target Server Type    : MySQL
 Target Server Version : 80040 (8.0.40)
 File Encoding         : 65001

 Date: 01/01/2025 20:28:38
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for avatar
-- ----------------------------
DROP TABLE IF EXISTS `avatar`;
CREATE TABLE `avatar`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `mimetype` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `size` int NULL DEFAULT NULL,
  `user_id` int NULL DEFAULT NULL,
  `creatAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `filename`(`filename` ASC) USING BTREE,
  INDEX `user_id`(`user_id` ASC) USING BTREE,
  CONSTRAINT `avatar_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of avatar
-- ----------------------------
INSERT INTO `avatar` VALUES (1, '5616309291fb5d4f5525186b8ced6900', 'image/jpeg', 579522, 7, '2025-01-01 18:14:41', '2025-01-01 18:14:41');
INSERT INTO `avatar` VALUES (2, '33e986255492f7014284415930d70c17', 'image/png', 19703, 7, '2025-01-01 18:27:37', '2025-01-01 18:27:37');
INSERT INTO `avatar` VALUES (3, 'b70e6e019a52ebd7197beccbe521872c', 'image/jpeg', 579522, 7, '2025-01-01 18:27:50', '2025-01-01 18:27:50');
INSERT INTO `avatar` VALUES (4, '125e71efd188a55be81196ba13c9eaf2', 'image/jpeg', 579522, 7, '2025-01-01 18:41:03', '2025-01-01 18:41:03');
INSERT INTO `avatar` VALUES (5, 'ce162fefea8c69d3c669bad74606f8af', 'image/jpeg', 579522, 7, '2025-01-01 18:41:29', '2025-01-01 18:41:29');
INSERT INTO `avatar` VALUES (6, '929719540cb3d4aa4520f9263381e982', 'image/jpeg', 579522, 7, '2025-01-01 18:41:50', '2025-01-01 18:41:50');
INSERT INTO `avatar` VALUES (7, '9e7064af66b126cae2815b81f6441fae', 'image/jpeg', 579522, 7, '2025-01-01 18:42:53', '2025-01-01 18:42:53');

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `moment_id` int NOT NULL,
  `user_id` int NOT NULL,
  `comment_id` int NULL DEFAULT NULL,
  `creatAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `moment_id`(`moment_id` ASC) USING BTREE,
  INDEX `user_id`(`user_id` ASC) USING BTREE,
  INDEX `comment_id`(`comment_id` ASC) USING BTREE,
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`moment_id`) REFERENCES `moment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_ibfk_3` FOREIGN KEY (`comment_id`) REFERENCES `comment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES (1, 'kunkun打球好帅', 2, 7, NULL, '2024-12-31 20:57:47', '2024-12-31 20:57:47');
INSERT INTO `comment` VALUES (2, 'kunkun打球好帅', 2, 7, NULL, '2024-12-31 21:01:01', '2024-12-31 21:01:01');
INSERT INTO `comment` VALUES (5, '超爱kunkun', 1, 7, NULL, '2025-01-01 14:24:08', '2025-01-01 14:24:08');
INSERT INTO `comment` VALUES (6, '我是ikun，我不是小黑子', 1, 7, NULL, '2025-01-01 14:24:19', '2025-01-01 14:24:19');
INSERT INTO `comment` VALUES (7, '喜欢看kunkun打球', 3, 7, NULL, '2025-01-01 14:24:34', '2025-01-01 14:24:34');

-- ----------------------------
-- Table structure for label
-- ----------------------------
DROP TABLE IF EXISTS `label`;
CREATE TABLE `label`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of label
-- ----------------------------
INSERT INTO `label` VALUES (1, '篮球', '2025-01-01 14:51:57', '2025-01-01 14:51:57');
INSERT INTO `label` VALUES (2, '唱歌', '2025-01-01 14:52:11', '2025-01-01 14:52:11');
INSERT INTO `label` VALUES (3, '跳舞', '2025-01-01 14:52:17', '2025-01-01 14:52:17');
INSERT INTO `label` VALUES (4, 'rap', '2025-01-01 14:52:23', '2025-01-01 14:52:23');
INSERT INTO `label` VALUES (5, '爱情', '2025-01-01 15:44:19', '2025-01-01 15:44:19');
INSERT INTO `label` VALUES (6, '友谊', '2025-01-01 15:44:19', '2025-01-01 15:44:19');
INSERT INTO `label` VALUES (7, '哲学', '2025-01-01 15:44:19', '2025-01-01 15:44:19');

-- ----------------------------
-- Table structure for moment
-- ----------------------------
DROP TABLE IF EXISTS `moment`;
CREATE TABLE `moment`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_id` int NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id` ASC) USING BTREE,
  CONSTRAINT `moment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 24 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of moment
-- ----------------------------
INSERT INTO `moment` VALUES (1, 'ikun永相随', 7, '2024-12-31 20:32:56', '2024-12-31 20:32:56');
INSERT INTO `moment` VALUES (2, 'ikun永相随', 1, '2024-12-31 19:39:36', '2024-12-31 20:26:12');
INSERT INTO `moment` VALUES (3, '曾几何时，他也好，她也好，都是这家伙的被害者。所以我才憎恶着。这个强求着所谓“大家”的世界。必须建立在牺牲某人之上才能成立的低劣的和平。以温柔和正义粉饰，明明是恶毒之物却登大雅之堂，随着时间的流逝越发凶恶，除欺瞒外别无其二的空虚的概念。过去和世界都是无法改变的。发生过的事情和所谓的“大家”都是无法改变的。但是，并不是说自己只能隶属于他们', 1, '2024-12-31 19:39:36', '2024-12-31 19:39:36');
INSERT INTO `moment` VALUES (4, '不要告诉我你不需要保护，不要告诉我你不寂寞，知微，我只希望你，在走过黑夜的那个时辰，不要倔强的选择一个人。', 3, '2024-12-31 19:39:36', '2024-12-31 19:39:36');
INSERT INTO `moment` VALUES (5, 'If you shed tears when you miss the sun, you also miss the stars.如果你因失去了太阳而流泪，那么你也将失去群星了。', 1, '2024-12-31 19:39:36', '2024-12-31 19:39:36');
INSERT INTO `moment` VALUES (6, '在世间万物中我都发现了你，渺小时，你是阳光下一粒种子，伟大时，你隐身在高山海洋里。', 2, '2024-12-31 19:39:36', '2024-12-31 19:39:36');
INSERT INTO `moment` VALUES (7, '某一天，突然发现，许多结果都与路径无关。', 4, '2024-12-31 19:39:36', '2024-12-31 19:39:36');
INSERT INTO `moment` VALUES (8, '限定目的，能使人生变得简洁。', 2, '2024-12-31 19:39:36', '2024-12-31 19:39:36');
INSERT INTO `moment` VALUES (9, '翅膀长在你的肩上，太在乎别人对于飞行姿势的批评，所以你飞不起来', 4, '2024-12-31 19:39:36', '2024-12-31 19:39:36');
INSERT INTO `moment` VALUES (10, '一个人至少拥有一个梦想，有一个理由去坚强。心若没有栖息的地方，到哪里都是在流浪。', 2, '2024-12-31 19:39:36', '2024-12-31 19:39:36');
INSERT INTO `moment` VALUES (11, '不乱于心，不困于情。不畏将来，不念过往。如此，安好。', 3, '2024-12-31 19:39:36', '2024-12-31 19:39:36');
INSERT INTO `moment` VALUES (12, '如果你给我的，和你给别人的是一样的，那我就不要了。', 3, '2024-12-31 19:39:36', '2024-12-31 19:39:36');
INSERT INTO `moment` VALUES (13, '故事的开头总是这样，适逢其会，猝不及防。故事的结局总是这样，花开两朵，天各一方。', 2, '2024-12-31 19:39:36', '2024-12-31 19:39:36');
INSERT INTO `moment` VALUES (14, '你不愿意种花，你说，我不愿看见它一点点凋落。是的，为了避免结束，你避免了一切开始。', 2, '2024-12-31 19:39:36', '2024-12-31 19:39:36');
INSERT INTO `moment` VALUES (15, '你如果认识从前的我，也许你会原谅现在的我。', 4, '2024-12-31 19:39:36', '2024-12-31 19:39:36');
INSERT INTO `moment` VALUES (16, '每一个不曾起舞的日子，都是对生命的辜负。', 2, '2024-12-31 19:39:36', '2024-12-31 19:39:36');
INSERT INTO `moment` VALUES (17, '向来缘浅，奈何情深。', 2, '2024-12-31 19:39:36', '2024-12-31 19:39:36');
INSERT INTO `moment` VALUES (18, '心之所向 素履以往 生如逆旅 一苇以航', 3, '2024-12-31 19:39:36', '2024-12-31 19:39:36');
INSERT INTO `moment` VALUES (19, '生如夏花之绚烂，死如秋叶之静美。', 3, '2024-12-31 19:39:36', '2024-12-31 19:39:36');
INSERT INTO `moment` VALUES (20, '答案很长，我准备用一生的时间来回答，你准备要听了吗？', 4, '2024-12-31 19:39:36', '2024-12-31 19:39:36');
INSERT INTO `moment` VALUES (21, '因为爱过，所以慈悲；因为懂得，所以宽容。', 4, '2024-12-31 19:39:36', '2024-12-31 19:39:36');
INSERT INTO `moment` VALUES (22, '我们听过无数的道理，却仍旧过不好这一生。', 1, '2024-12-31 19:39:36', '2024-12-31 19:39:36');
INSERT INTO `moment` VALUES (23, '我来不及认真地年轻，待明白过来时，只能选择认真地老去。', 2, '2024-12-31 19:39:36', '2024-12-31 19:39:36');

-- ----------------------------
-- Table structure for moment_label
-- ----------------------------
DROP TABLE IF EXISTS `moment_label`;
CREATE TABLE `moment_label`  (
  `moment_id` int NOT NULL,
  `label_id` int NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`moment_id`, `label_id`) USING BTREE,
  INDEX `label_id`(`label_id` ASC) USING BTREE,
  CONSTRAINT `moment_label_ibfk_1` FOREIGN KEY (`moment_id`) REFERENCES `moment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `moment_label_ibfk_2` FOREIGN KEY (`label_id`) REFERENCES `label` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of moment_label
-- ----------------------------
INSERT INTO `moment_label` VALUES (1, 1, '2025-01-01 16:09:09', '2025-01-01 16:09:09');
INSERT INTO `moment_label` VALUES (1, 2, '2025-01-01 16:09:09', '2025-01-01 16:09:09');
INSERT INTO `moment_label` VALUES (1, 4, '2025-01-01 16:09:09', '2025-01-01 16:09:09');
INSERT INTO `moment_label` VALUES (1, 5, '2025-01-01 16:09:09', '2025-01-01 16:09:09');
INSERT INTO `moment_label` VALUES (1, 6, '2025-01-01 16:09:09', '2025-01-01 16:09:09');
INSERT INTO `moment_label` VALUES (1, 7, '2025-01-01 16:09:09', '2025-01-01 16:09:09');
INSERT INTO `moment_label` VALUES (2, 1, '2025-01-01 16:07:30', '2025-01-01 16:07:30');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `creatAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `avatar_url` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'james', 'e10adc3949ba59abbe56e057f20f883e', '2024-12-31 19:29:54', '2024-12-31 19:29:54', NULL);
INSERT INTO `user` VALUES (2, 'lilei', 'e10adc3949ba59abbe56e057f20f883e', '2024-12-31 19:28:33', '2024-12-31 19:28:33', NULL);
INSERT INTO `user` VALUES (3, 'hmm', 'e10adc3949ba59abbe56e057f20f883e', '2024-12-31 19:28:33', '2024-12-31 19:28:33', NULL);
INSERT INTO `user` VALUES (4, 'luly', 'e10adc3949ba59abbe56e057f20f883e', '2024-12-31 19:28:33', '2024-12-31 19:28:33', NULL);
INSERT INTO `user` VALUES (7, 'tony', 'e10adc3949ba59abbe56e057f20f883e', '2024-12-30 21:18:07', '2025-01-01 18:42:53', 'http://localhost:8000/users/avatar/7');

SET FOREIGN_KEY_CHECKS = 1;
