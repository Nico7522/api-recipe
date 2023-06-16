-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 16 juin 2023 à 11:47
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `apirecipe`
--

-- --------------------------------------------------------

--
-- Structure de la table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `text` varchar(255) NOT NULL,
  `name` varchar(25) DEFAULT NULL,
  `valid` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) DEFAULT NULL,
  `RecipeId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `comment`
--

INSERT INTO `comment` (`id`, `text`, `name`, `valid`, `createdAt`, `updatedAt`, `UserId`, `RecipeId`) VALUES
(8, 'Très bon je recommande encore !', 'nicolas', 0, '2023-05-09 13:28:36', '2023-06-09 12:33:17', 2, NULL),
(10, 'Très bon  👨👩', 'Nico', 0, '2023-05-09 13:29:29', '2023-06-09 13:16:17', NULL, NULL),
(11, 'Très bon mmh  👨👩', 'Nico', 1, '2023-05-09 13:35:48', '2023-06-09 12:20:01', NULL, NULL),
(13, 'Really good', 'nicolas', 1, '2023-05-09 14:47:23', '2023-06-09 12:20:03', 2, NULL),
(14, 'Easy to cook !! 🎅', 'nico', 1, '2023-05-09 14:47:42', '2023-06-09 12:26:33', NULL, NULL),
(15, 'Easy to cook !!! 🎅', 'nico', 0, '2023-05-10 07:10:59', '2023-05-10 07:10:59', NULL, NULL),
(16, 'Easy to cook !!! 🎅', 'John', 0, '2023-05-15 07:08:09', '2023-05-15 07:08:09', 4, NULL),
(17, 'Good ', 'Nico', 0, '2023-05-15 07:08:21', '2023-05-15 07:08:21', NULL, NULL),
(19, 'Good', 'Nico', 0, '2023-05-20 07:22:56', '2023-05-20 07:22:56', NULL, NULL),
(20, 'Good', 'Nico', 0, '2023-05-20 07:27:15', '2023-05-20 07:27:15', NULL, NULL),
(21, 'Good', 'Nico', 0, '2023-05-20 07:27:18', '2023-05-20 07:27:18', NULL, NULL),
(22, 'ss', 'Nico', 0, '2023-05-20 07:29:10', '2023-05-20 07:29:10', NULL, NULL),
(23, 'sssss', 'Nico', 0, '2023-05-20 07:29:36', '2023-05-20 07:29:36', NULL, NULL),
(24, 'Good', 'Nico', 0, '2023-05-20 07:34:19', '2023-05-20 07:34:19', NULL, NULL),
(25, 'ssssss', 'Nico', 0, '2023-05-20 07:40:05', '2023-05-20 07:40:05', NULL, NULL),
(26, 'ssssss', 'Nico', 0, '2023-05-20 07:40:58', '2023-05-20 07:40:58', NULL, NULL),
(27, 'ssssssss', 'Nico', 0, '2023-05-20 07:41:48', '2023-05-20 07:41:48', NULL, NULL),
(28, 'ssssssss', 'Nico', 0, '2023-05-20 07:42:16', '2023-05-20 07:42:16', NULL, NULL),
(29, 'ssssssss', 'Nico', 0, '2023-05-20 07:42:40', '2023-05-20 07:42:40', NULL, NULL),
(30, 'ssssssss', 'Nico', 0, '2023-05-20 07:45:53', '2023-05-20 07:45:53', NULL, NULL),
(31, 'ssssssss', 'Nico', 0, '2023-05-20 07:46:53', '2023-05-20 07:46:53', NULL, NULL),
(32, 'ssssssss', 'Nico', 0, '2023-05-20 07:47:01', '2023-05-20 07:47:01', NULL, NULL),
(33, 'ssssssss', 'Nico', 0, '2023-05-20 07:47:34', '2023-05-20 07:47:34', NULL, NULL),
(34, 'ssssssss', 'Nico', 0, '2023-05-20 07:48:55', '2023-05-20 07:48:55', NULL, NULL),
(35, 'sssqs', 'Nico', 0, '2023-05-20 07:49:08', '2023-05-20 07:49:08', NULL, NULL),
(36, 'qsqs', 'Nico', 0, '2023-05-20 07:51:44', '2023-05-20 07:51:44', NULL, NULL),
(37, 'qsqsqsqs', 'Nico', 0, '2023-05-20 07:51:54', '2023-05-20 07:51:54', NULL, NULL),
(38, 'qsqsqsqsqs', 'Nico', 0, '2023-05-20 07:52:00', '2023-05-20 07:52:00', NULL, NULL),
(39, 'qsqsqsqsqssqs', 'Nico', 0, '2023-05-20 07:52:33', '2023-05-20 07:52:33', NULL, NULL),
(40, 'qsqsqsqsqssqs', 'Nico', 0, '2023-05-20 07:57:58', '2023-05-20 07:57:58', NULL, NULL),
(41, 'qs', 'Nico', 0, '2023-05-20 08:05:57', '2023-05-20 08:05:57', NULL, NULL),
(42, 'qs', 'Nico', 0, '2023-05-20 08:08:02', '2023-05-20 08:08:02', NULL, NULL),
(43, 'qs', 'Nico', 0, '2023-05-20 08:08:10', '2023-05-20 08:08:10', NULL, NULL),
(44, 'qs', 'Nico', 0, '2023-05-20 08:08:18', '2023-05-20 08:08:18', NULL, NULL),
(45, 'qsqs', 'Nico', 0, '2023-05-20 08:08:34', '2023-05-20 08:08:34', NULL, NULL),
(46, 'qsqs', 'Nico', 0, '2023-05-20 08:10:34', '2023-05-20 08:10:34', NULL, NULL),
(47, 'qsqsbvbvb', 'Nico', 0, '2023-05-20 08:10:53', '2023-05-20 08:10:53', NULL, NULL),
(48, 'bvb', 'Nico', 0, '2023-05-20 08:10:55', '2023-05-20 08:10:55', NULL, NULL),
(49, 'qsqsbvbvbqs', 'Nico', 0, '2023-05-20 08:11:50', '2023-05-20 08:11:50', NULL, NULL),
(50, 'qsqsbvbvbqs', 'Nico', 0, '2023-05-20 08:12:22', '2023-05-20 08:12:22', NULL, NULL),
(51, 'qsqsbvbvbqs', 'Nico', 0, '2023-05-20 08:12:30', '2023-05-20 08:12:30', NULL, NULL),
(52, 'qsqsbvbvbqs', 'Nico', 0, '2023-05-20 08:12:33', '2023-05-20 08:12:33', NULL, NULL),
(53, 'qsqsbvbvbqs', 'Nico', 0, '2023-05-20 08:13:05', '2023-05-20 08:13:05', NULL, NULL),
(54, 'qsqsbvbvbqs', 'Nico', 0, '2023-05-20 08:13:52', '2023-05-20 08:13:52', NULL, NULL),
(55, 'qsqsbvbvbqs', 'Nico', 0, '2023-05-20 08:14:20', '2023-05-20 08:14:20', NULL, NULL),
(56, 'qsqsbvbvbqs', 'Nico', 0, '2023-05-20 08:14:39', '2023-05-20 08:14:39', NULL, NULL),
(57, 'qsqsbvbvbqsqsqsssss', 'Nico', 0, '2023-05-20 08:14:54', '2023-05-20 08:14:54', NULL, NULL),
(58, 'qs', 'Nico', 0, '2023-05-20 08:18:11', '2023-05-20 08:18:11', NULL, NULL),
(59, 'qs', 'Nico', 0, '2023-05-20 08:18:38', '2023-05-20 08:18:38', NULL, NULL),
(60, 'qs', 'Nico', 0, '2023-05-20 08:19:31', '2023-05-20 08:19:31', NULL, NULL),
(61, 'qs', 'Nico', 0, '2023-05-20 08:19:52', '2023-05-20 08:19:52', NULL, NULL),
(62, 'qs', 'Nico', 0, '2023-05-20 08:20:59', '2023-05-20 08:20:59', NULL, NULL),
(63, 'sqs', 'Nico', 0, '2023-05-20 08:24:07', '2023-05-20 08:24:07', NULL, NULL),
(64, 'sqs', 'Nico', 0, '2023-05-20 08:28:40', '2023-05-20 08:28:40', NULL, NULL),
(65, 'sqs', 'Nico', 0, '2023-05-20 08:29:45', '2023-05-20 08:29:45', NULL, NULL),
(66, 'sqs', 'Nico', 0, '2023-05-20 08:29:50', '2023-05-20 08:29:50', NULL, NULL),
(67, 'sqs', 'Nico', 0, '2023-05-20 08:29:52', '2023-05-20 08:29:52', NULL, NULL),
(68, 'sqssqs', 'Nico', 0, '2023-05-20 08:46:44', '2023-05-20 08:46:44', NULL, NULL),
(69, 'sqssqs', 'Nico', 0, '2023-05-20 08:47:05', '2023-05-20 08:47:05', NULL, NULL),
(70, 'sqssqs', 'Nico', 0, '2023-05-20 08:47:08', '2023-05-20 08:47:08', NULL, NULL),
(71, 'sqssqs', 'Nico', 0, '2023-05-20 08:47:38', '2023-05-20 08:47:38', NULL, NULL),
(72, 'sqssqs', 'Nico', 0, '2023-05-20 08:48:06', '2023-05-20 08:48:06', NULL, NULL),
(73, 'sqssqs', 'Nico', 0, '2023-05-20 08:48:13', '2023-05-20 08:48:13', NULL, NULL),
(74, 'sqssqs', 'Nico', 0, '2023-05-20 08:48:43', '2023-05-20 08:48:43', NULL, NULL),
(75, 'sqssqs', 'Nico', 0, '2023-05-20 08:48:52', '2023-05-20 08:48:52', NULL, NULL),
(76, 'sqssqs', 'Nico', 0, '2023-05-20 08:49:20', '2023-05-20 08:49:20', NULL, NULL),
(77, 'sqssqs', 'Nico', 0, '2023-05-20 08:49:49', '2023-05-20 08:49:49', NULL, NULL),
(78, 'qssq', 'Nico', 0, '2023-05-20 08:53:46', '2023-05-20 08:53:46', NULL, NULL),
(79, 'qssq', 'Nico', 0, '2023-05-20 08:53:48', '2023-05-20 08:53:48', NULL, NULL),
(80, 'qs', 'Nico', 0, '2023-05-20 09:03:26', '2023-05-20 09:03:26', NULL, NULL),
(81, 'Really good recipe 👩👩👩', 'Nico', 0, '2023-05-20 09:03:43', '2023-05-20 09:03:43', NULL, NULL),
(82, 'Really good recipe 👩👩👩', 'Nico', 0, '2023-05-20 09:03:57', '2023-05-20 09:03:57', NULL, NULL),
(83, 'Really good recipe 👩👩👩', 'Nico', 0, '2023-05-20 09:04:48', '2023-05-20 09:04:48', NULL, NULL),
(84, 'Yoow', 'Nico', 0, '2023-05-20 09:04:54', '2023-05-20 09:04:54', NULL, NULL),
(85, 'Yoow', 'Nico', 0, '2023-05-20 09:04:58', '2023-05-20 09:04:58', NULL, NULL),
(86, 'Yoow', 'Nico', 0, '2023-05-20 09:04:59', '2023-05-20 09:04:59', NULL, NULL),
(87, 'Yoowsqs', 'Nico', 0, '2023-05-20 09:05:01', '2023-05-20 09:05:01', NULL, NULL),
(88, 'Yoowsqs', 'Nico', 0, '2023-05-20 09:05:38', '2023-05-20 09:05:38', NULL, NULL),
(89, 'Yoowsqssqs', 'Nico', 0, '2023-05-20 09:05:46', '2023-05-20 09:05:46', NULL, NULL),
(90, 'Yoowsqssqsss', 'Nico', 0, '2023-05-20 09:05:48', '2023-05-20 09:05:48', NULL, NULL),
(91, 'YoowsqssqssssqsqqqSS', 'Nico', 0, '2023-05-20 09:05:55', '2023-05-20 09:05:55', NULL, NULL),
(92, 'YoowsqssqssssqsqqqsssSS', 'Nico', 0, '2023-05-20 09:06:31', '2023-05-20 09:06:31', NULL, NULL),
(93, 'YoowsqssqssssqsqqqsssSSsqs', 'Nico', 0, '2023-05-20 09:07:21', '2023-05-20 09:07:21', NULL, NULL),
(94, 'd', 'Nico', 0, '2023-05-20 09:07:52', '2023-05-20 09:07:52', NULL, NULL),
(95, 'd', 'Nico', 0, '2023-05-20 09:07:55', '2023-05-20 09:07:55', NULL, NULL),
(96, 's', 'Nico', 0, '2023-05-20 09:08:03', '2023-05-20 09:08:03', NULL, NULL),
(97, 'sss', 'Nico', 0, '2023-05-20 09:08:18', '2023-05-20 09:08:18', NULL, NULL),
(98, 'sssqq', 'Nico', 0, '2023-05-20 09:08:20', '2023-05-20 09:08:20', NULL, NULL),
(99, 'sssqqsqs', 'Nico', 0, '2023-05-20 09:08:24', '2023-05-20 09:08:24', NULL, NULL),
(100, 'sssqqsqssss', 'Nico', 0, '2023-05-20 09:08:33', '2023-05-20 09:08:33', NULL, NULL),
(101, 'Good !!!', 'Nico', 0, '2023-05-20 09:08:38', '2023-05-20 09:08:38', NULL, NULL),
(102, 'Good !!!', 'Nico', 0, '2023-05-20 09:09:55', '2023-05-20 09:09:55', NULL, NULL),
(103, 'sqs', 'Nico', 0, '2023-05-20 15:29:12', '2023-05-20 15:29:12', NULL, NULL),
(104, 'Bonjour c\'est très bon', 'Nico', 0, '2023-05-21 12:43:53', '2023-05-21 12:43:53', NULL, NULL),
(105, 'New comment', 'Nico', 0, '2023-05-21 14:33:25', '2023-05-21 14:33:25', NULL, 131),
(106, 'sqs', 'Nico', 0, '2023-05-21 14:54:06', '2023-05-21 14:54:06', NULL, NULL),
(107, 'sqs', 'Nico', 0, '2023-05-22 12:44:56', '2023-05-22 12:44:56', NULL, NULL),
(108, 'sqs', 'Nico', 0, '2023-05-22 12:45:07', '2023-05-22 12:45:07', NULL, NULL),
(109, 'sqs', 'Nico', 0, '2023-05-22 12:45:08', '2023-05-22 12:45:08', NULL, NULL),
(110, 'sqs', 'Nico', 0, '2023-05-22 12:45:09', '2023-05-22 12:45:09', NULL, NULL),
(111, 'sqs', 'Nico', 0, '2023-05-22 12:45:09', '2023-05-22 12:45:09', NULL, NULL),
(112, 'sqs', 'Nico', 0, '2023-05-22 12:45:10', '2023-05-22 12:45:10', NULL, NULL),
(113, 'Très bon ! ௹', 'Nico', 0, '2023-05-23 14:11:19', '2023-05-23 14:11:19', NULL, NULL),
(114, 'bonjour\n', 'Nico', 0, '2023-05-24 07:07:34', '2023-05-24 07:07:34', NULL, NULL),
(117, 'Good', 'Nico', 0, '2023-05-25 09:01:29', '2023-05-25 09:01:29', NULL, NULL),
(118, 'Good', 'Nico', 0, '2023-05-25 09:06:35', '2023-05-25 09:06:35', NULL, NULL),
(121, 'Goon,nd', 'Nico', 0, '2023-05-25 09:08:50', '2023-05-25 09:08:50', NULL, NULL),
(127, 'Goonsd', 'Nico', 0, '2023-05-25 09:16:53', '2023-05-25 09:16:53', NULL, NULL),
(135, 'Goo;nsd', 'Nico', 0, '2023-05-25 09:21:07', '2023-05-25 09:21:07', NULL, 130),
(136, 'Goonsd', 'Nico', 0, '2023-05-25 09:21:14', '2023-05-25 09:21:14', NULL, 130),
(137, 'Goonsd', 'Nico', 0, '2023-05-25 09:21:27', '2023-05-25 09:21:27', NULL, 131),
(138, 'Goonsd', 'Nico', 0, '2023-05-25 09:21:42', '2023-05-25 09:21:42', NULL, NULL),
(139, 'Goonsd', 'Nico', 0, '2023-05-25 09:21:55', '2023-05-25 09:21:55', NULL, 131),
(140, 'Goonsd', 'Nico', 0, '2023-05-25 09:22:02', '2023-05-25 09:22:02', NULL, 131),
(141, 'Goons::jjjj', 'Nico', 0, '2023-05-25 10:13:33', '2023-06-08 07:20:51', NULL, 131),
(142, 'test', 'Nico', 0, '2023-06-08 07:22:32', '2023-06-08 07:22:32', NULL, 141);

-- --------------------------------------------------------

--
-- Structure de la table `ingredient`
--

CREATE TABLE `ingredient` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `calories` float NOT NULL,
  `carbohydrates` float DEFAULT NULL,
  `fats` float DEFAULT NULL,
  `proteins` float DEFAULT NULL,
  `valid` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `ingredient`
--

INSERT INTO `ingredient` (`id`, `name`, `calories`, `carbohydrates`, `fats`, `proteins`, `valid`, `createdAt`, `updatedAt`) VALUES
(1, 'oiqsqsqqssgnfdfffon', 20, 0.1, 0, 0, 0, '2023-05-05 12:41:42', '2023-05-05 12:41:42'),
(2, 'courgette', 20, 0.1, 0, 0, 0, '2023-05-09 07:04:22', '2023-05-09 07:04:22'),
(3, 'carotte', 20, 0.1, 0, 0, 0, '2023-05-09 07:04:28', '2023-05-09 07:04:28'),
(4, 'oignon', 20, 0.1, 0, 0, 0, '2023-05-09 07:04:35', '2023-05-09 07:04:35'),
(5, 'farine', 375, 73, 0, 7, 0, '2023-05-22 09:56:50', '2023-05-22 09:56:50'),
(6, 'oeufs', 74, 0, 6, 6, 0, '2023-05-22 09:57:10', '2023-05-22 09:57:10'),
(7, 'beurre', 400, 0, 30, 5, 0, '2023-05-22 09:57:33', '2023-05-22 09:57:33');

-- --------------------------------------------------------

--
-- Structure de la table `mm_recipe_ingredient`
--

CREATE TABLE `mm_recipe_ingredient` (
  `quantity` float NOT NULL,
  `unit` varchar(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `RecipeId` int(11) NOT NULL,
  `IngredientId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `mm_recipe_ingredient`
--

INSERT INTO `mm_recipe_ingredient` (`quantity`, `unit`, `createdAt`, `updatedAt`, `RecipeId`, `IngredientId`) VALUES
(200, 'grammes', '2023-05-17 08:44:51', '2023-05-17 08:44:51', 130, 2),
(450, 'grammes', '2023-05-17 08:44:51', '2023-05-17 08:44:51', 130, 3),
(220, 'grammes', '2023-05-17 08:44:51', '2023-05-17 08:44:51', 130, 4),
(200, 'grammes', '2023-05-17 08:44:53', '2023-05-17 08:44:53', 131, 2),
(450, 'grammes', '2023-05-17 08:44:53', '2023-05-17 08:44:53', 131, 3),
(220, 'grammes', '2023-05-17 08:44:53', '2023-05-17 08:44:53', 131, 4),
(200, 'grammes', '2023-05-18 13:38:26', '2023-05-18 13:38:26', 132, 2),
(450, 'grammes', '2023-05-18 13:38:26', '2023-05-18 13:38:26', 132, 3),
(220, 'grammes', '2023-05-18 13:38:26', '2023-05-18 13:38:26', 132, 4),
(200, 'grammes', '2023-05-22 07:42:39', '2023-05-22 07:42:39', 133, 2),
(450, 'grammes', '2023-05-22 07:42:39', '2023-05-22 07:42:39', 133, 3),
(220, 'grammes', '2023-05-22 07:42:39', '2023-05-22 07:42:39', 133, 4),
(150, 'grammes', '2023-05-24 10:11:22', '2023-05-24 10:11:22', 141, 5),
(900, 'grammes', '2023-05-24 10:11:22', '2023-05-24 10:11:22', 141, 6),
(230, 'grammes', '2023-05-24 10:11:22', '2023-05-24 10:11:22', 141, 7),
(150, 'grammes', '2023-06-08 09:30:12', '2023-06-08 09:30:12', 142, 4),
(200, 'grammes', '2023-06-08 09:30:12', '2023-06-08 09:30:12', 142, 5),
(600, 'grammes', '2023-06-08 09:30:12', '2023-06-08 09:30:12', 142, 6);

-- --------------------------------------------------------

--
-- Structure de la table `mm_recipe_tag`
--

CREATE TABLE `mm_recipe_tag` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `RecipeId` int(11) NOT NULL,
  `TagId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `mm_recipe_tag`
--

INSERT INTO `mm_recipe_tag` (`createdAt`, `updatedAt`, `RecipeId`, `TagId`) VALUES
('2023-05-17 08:44:51', '2023-05-17 08:44:51', 130, 1),
('2023-05-17 08:44:53', '2023-05-17 08:44:53', 131, 1),
('2023-05-18 13:38:26', '2023-05-18 13:38:26', 132, 1),
('2023-05-22 07:42:39', '2023-05-22 07:42:39', 133, 1),
('2023-05-24 10:11:22', '2023-05-24 10:11:22', 141, 1),
('2023-05-24 10:11:22', '2023-05-24 10:11:22', 141, 2),
('2023-05-24 10:11:22', '2023-05-24 10:11:22', 141, 3),
('2023-06-08 09:30:12', '2023-06-08 09:30:12', 142, 1),
('2023-06-08 09:30:12', '2023-06-08 09:30:12', 142, 2),
('2023-06-08 09:30:12', '2023-06-08 09:30:12', 142, 3);

-- --------------------------------------------------------

--
-- Structure de la table `mm_user_react_recipe`
--

CREATE TABLE `mm_user_react_recipe` (
  `reaction` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `RecipeId` int(11) NOT NULL,
  `UserId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `mm_user_react_recipe`
--

INSERT INTO `mm_user_react_recipe` (`reaction`, `createdAt`, `updatedAt`, `RecipeId`, `UserId`) VALUES
('tasty', '2023-05-21 12:37:14', '2023-05-21 12:37:14', 131, 2),
('tasty', '2023-05-21 12:37:27', '2023-05-21 12:37:27', 131, 18);

-- --------------------------------------------------------

--
-- Structure de la table `recipe`
--

CREATE TABLE `recipe` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(50) NOT NULL DEFAULT '/images/recipe/recipedefault.jpg',
  `valid` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `creatorId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `recipe`
--

INSERT INTO `recipe` (`id`, `name`, `description`, `image`, `valid`, `createdAt`, `updatedAt`, `creatorId`) VALUES
(130, 'Lasagnes à la bolognaise 44444', 'ÉTAPE 1 : oignon jaune ail huile d\'olive Faire revenir gousses hachées d\'ail et les oignons émincés dans un peu d\'huile d\'olive. ÉTAPE 2 : carotte viande céleri Ajouter la carotte et la branche de céleri hachée puis la viande et faire revenir le tout. ÉTA', '/images/recipe/recipedefault.jpg', 0, '2023-05-17 08:44:51', '2023-05-24 09:21:09', 4),
(131, 'Lasagnes à la bolognaise 444444444', 'ÉTAPE 1 : oignon jaune ail huile d\'olive Faire revenir gousses hachées d\'ail et les oignons émincés dans un peu d\'huile d\'olive. ÉTAPE 2 : carotte viande céleri Ajouter la carotte et la branche de céleri hachée puis la viande et faire revenir le tout. ÉTA', '/images/recipe/recipedefault.jpg', 0, '2023-05-17 08:44:53', '2023-06-09 14:32:16', 4),
(132, 'Lasagnes à la bolognaise 44ss4444444', 'ÉTAPE 1 : oignon jaune ail huile d\'olive Faire revenir gousses hachées d\'ail et les oignons émincés dans un peu d\'huile d\'olive. ÉTAPE 2 : carotte viande céleri Ajouter la carotte et la branche de céleri hachée puis la viande et faire revenir le tout. ÉTA', '/images/recipe/recipedefault.jpg', 1, '2023-05-18 13:38:26', '2023-05-24 09:24:49', 4),
(133, 'test validator ', 'ÉTAPE 1 : oignon jaune ail huile d\'olive Faire revenir gousses hachées d\'ail et les oignons émincés dans un peu d\'huile d\'olive. ÉTAPE 2 : carotte viande céleri Ajouter la carotte et la branche de céleri hachée puis la viande et faire revenir le tout. ÉTA', '/images/recipe/recipedefault.jpg', 1, '2023-05-22 07:42:39', '2023-06-09 14:31:05', 4),
(141, 'test tags', 'dqsdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd', '/images/recipe/recipedefault.jpg', 0, '2023-05-24 10:11:22', '2023-05-24 10:11:22', NULL),
(142, 'sdsdsdd', 'dsdsdsdsdsd', '/images/recipe/recipedefault.jpg', 0, '2023-06-08 09:30:12', '2023-06-08 09:30:12', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `tag`
--

CREATE TABLE `tag` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `tag`
--

INSERT INTO `tag` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Vegan', '2023-05-05 12:41:44', '2023-05-05 12:41:44'),
(2, 'Healthy', '2023-05-12 08:17:42', '2023-05-12 08:17:42'),
(3, 'Dessert', '2023-05-12 08:18:25', '2023-05-12 08:18:25');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(25) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `birthdate` datetime NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL DEFAULT '/images/user/userdefault.jpg',
  `status` varchar(14) NOT NULL DEFAULT 'User',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `name`, `surname`, `birthdate`, `email`, `password`, `avatar`, `status`, `createdAt`, `updatedAt`) VALUES
(2, 'nicolas', 'd\'addabbo', '2000-01-01 00:00:00', 'nico.daddabbo7100@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$L0r/JVsQ0RDI5/wxDy61zA$bAxZqATw/Hia3kCtcmeso9Cx36RhucqLjZrJ8K6XzxU', '/images/user/userdefault.jpg', 'Admin', '2023-05-05 14:30:49', '2023-05-23 12:09:18'),
(4, 'John', 'Doe', '2000-01-01 00:00:00', 'johndoe@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$MVNVdCy0dHQD2CZi2wckRg$ui/HkbByxZBPy9jzSKBL7sky1webqBtcOphfYUVIk3w', '/images/user/userdefault.jpg', 'User', '2023-05-12 10:32:48', '2023-05-24 07:09:46'),
(5, 'Nico', 'D\'DDbbo', '1999-12-31 23:00:00', 'nico.daddabbo444@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$0NOMmjLUVWrCRP8p3CnSoA$GNGHGgu/+FRox2gfPLyMBQLkGs24PZNmOd2Mw3/xHC4', '/images/user/userdefault.jpg', 'Admin', '2023-05-16 09:19:11', '2023-05-23 09:57:32'),
(6, 'nicolasss', 'd\'addabboss', '1998-05-03 22:00:00', 'nico.daddabbo700@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$TFcTgpNuTgSiTLS7eUujgg$O3tbbfgvzt9vVP2W8cKy4miRYf+Vly77GMcStr13wb0', '/images/user/userdefault.jpg', 'User', '2023-05-16 09:21:13', '2023-06-08 10:03:23'),
(7, 'qs', 'sqs', '1720-05-22 23:42:30', 'nico.daddabbo4ss44@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$y/FC6MD7XV1WAeIt174/yw$cVLlFDlEcuju+xa7qgzZoWymvdVxjTUj+1kxBIAAM/w', '/images/user/userdefault.jpg', 'Admin', '2023-05-16 12:16:06', '2023-05-23 12:31:33'),
(13, 'nicolas', 'd\'addabbo', '1998-01-16 13:41:43', 'nico.daddabbo100@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$bHcQGjN6yFKopQD+kIT4ig$bMM6fslRGr6IG9EnkNRItXa4RzEVk6OXnqVdbo33uEw', '/images/user/userdefault.jpg', 'Admin', '2023-05-16 12:42:42', '2023-05-23 12:28:34'),
(14, 'qs', 'sqs', '1989-05-16 12:44:04', 'nico.daddabb100@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$pDl56Zb6Uj8y3nJtbQiVrQ$VZO6MwRQv4cPD5NrAcjZ34nApqVndztqrgNaybab15Y', '/images/user/userdefault.jpg', 'User', '2023-05-16 12:44:49', '2023-05-16 12:44:49'),
(15, 'John', 'Doe', '2000-01-01 00:00:00', 'jondoe@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$4H3e8TKfOg9J6wHbBmjvMQ$O2muBDRu7emU8mqm0jzG0jZ5mqqC4Vx7Zs+xiMBrp4E', '/images/user/userdefault.jpg', 'User', '2023-05-16 12:45:08', '2023-05-16 12:45:08'),
(18, 'nicolas', 'd\'addabbo', '2000-05-16 12:46:39', 'nico.dadda100@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$+9YWrJty+q+wJ6HMwJgrPw$ir+xJ9qkrubf5sLL4KI+SBTsGEkBy35NAhJNiRSMjAE', '/images/user/userdefault.jpg', 'Admin', '2023-05-16 12:48:14', '2023-05-23 10:07:44'),
(28, 'nicolas', 'd\'addabbo', '1990-05-16 12:53:05', 'nico.daddabbo7@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$z+IzD+lV61aae154oz96hA$loHt1A8SsUzluN3w4d0KFw+ApZ2tK+3KBWWbC1JCXpY', '/images/user/userdefault.jpg', 'Admin', '2023-05-16 12:53:30', '2023-05-23 12:32:23'),
(29, 'nicolas', 'd\'addabbo', '1990-05-16 12:53:05', 'nico.daddabbo7s@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$omWjlnVah1YzJ5ZSrAC05A$fD8pOTKxPWziXWCVGpwlzYanjLcP9/3MDP+Cyr+wPlk', '/images/user/userdefault.jpg', 'User', '2023-05-16 12:57:12', '2023-05-16 12:57:12'),
(732, 'Nicolas', 'D\'Addabbo', '1999-12-31 23:00:00', 'nicouser@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$a8Ya14IjpJejO83mbMEseg$Jsle3SZ2gWrlFgHFbfcrIBV41Mox0hXyherW8hOA92U', '/images/user/userdefault.jpg', 'User', '2023-05-23 14:20:53', '2023-05-23 14:20:53'),
(733, 'nicolas', 'd\'addabbo', '1970-06-30 23:00:00', 'nico.daddabbo7100sss@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$g3xL7YwfUGd/KH2vYrkNTg$RIBx+UypL4Q8W403vwi/BAUzJFmYfTjkd37f8suYf5w', '/images/user/userdefault.jpg', 'User', '2023-06-08 09:37:08', '2023-06-08 09:37:08'),
(734, 'John', 'Doe', '1999-12-31 23:00:00', 'nico@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$GERAU2ThlIB4ssp2HO8OJw$Qx/fmceg/00a59/X/9D6He3lezUYInTEuKhnybmkRPU', '/images/user/userdefault.jpg', 'Admin', '2023-06-08 10:01:14', '2023-06-08 10:01:14');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserId` (`UserId`),
  ADD KEY `RecipeId` (`RecipeId`);

--
-- Index pour la table `ingredient`
--
ALTER TABLE `ingredient`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_ingredient_name` (`name`);

--
-- Index pour la table `mm_recipe_ingredient`
--
ALTER TABLE `mm_recipe_ingredient`
  ADD PRIMARY KEY (`RecipeId`,`IngredientId`),
  ADD KEY `IngredientId` (`IngredientId`);

--
-- Index pour la table `mm_recipe_tag`
--
ALTER TABLE `mm_recipe_tag`
  ADD PRIMARY KEY (`RecipeId`,`TagId`),
  ADD KEY `TagId` (`TagId`);

--
-- Index pour la table `mm_user_react_recipe`
--
ALTER TABLE `mm_user_react_recipe`
  ADD PRIMARY KEY (`RecipeId`,`UserId`),
  ADD KEY `UserId` (`UserId`);

--
-- Index pour la table `recipe`
--
ALTER TABLE `recipe`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_recipe_name` (`name`),
  ADD KEY `creatorId` (`creatorId`);

--
-- Index pour la table `tag`
--
ALTER TABLE `tag`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_user_email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=144;

--
-- AUTO_INCREMENT pour la table `ingredient`
--
ALTER TABLE `ingredient`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `recipe`
--
ALTER TABLE `recipe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=143;

--
-- AUTO_INCREMENT pour la table `tag`
--
ALTER TABLE `tag`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=735;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`RecipeId`) REFERENCES `recipe` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Contraintes pour la table `mm_recipe_ingredient`
--
ALTER TABLE `mm_recipe_ingredient`
  ADD CONSTRAINT `mm_recipe_ingredient_ibfk_1` FOREIGN KEY (`RecipeId`) REFERENCES `recipe` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `mm_recipe_ingredient_ibfk_2` FOREIGN KEY (`IngredientId`) REFERENCES `ingredient` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `mm_recipe_tag`
--
ALTER TABLE `mm_recipe_tag`
  ADD CONSTRAINT `mm_recipe_tag_ibfk_1` FOREIGN KEY (`RecipeId`) REFERENCES `recipe` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `mm_recipe_tag_ibfk_2` FOREIGN KEY (`TagId`) REFERENCES `tag` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `mm_user_react_recipe`
--
ALTER TABLE `mm_user_react_recipe`
  ADD CONSTRAINT `mm_user_react_recipe_ibfk_1` FOREIGN KEY (`RecipeId`) REFERENCES `recipe` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `mm_user_react_recipe_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `recipe`
--
ALTER TABLE `recipe`
  ADD CONSTRAINT `recipe_ibfk_1` FOREIGN KEY (`creatorId`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
