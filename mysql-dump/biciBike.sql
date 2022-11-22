-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 22-11-2022 a las 17:32:01
-- Versión del servidor: 8.0.31-0ubuntu0.20.04.1
-- Versión de PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `biciBike`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `authentication_user`
--

CREATE TABLE `authentication_user` (
  `id` int NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `is_staff` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `authentication_user`
--

INSERT INTO `authentication_user` (`id`, `password`, `last_login`, `is_superuser`, `created_at`, `updated_at`, `username`, `email`, `is_active`, `is_staff`) VALUES
(1, 'pbkdf2_sha256$216000$FMxWz9cVHfjx$R5/wgwzhpT0RIcAwK96SH64A8R1zYE6reS133ct6k+E=', '2022-11-09 11:40:15.466072', 1, '2022-01-27 19:07:15.888818', '2022-01-27 19:07:15.953867', 'hache1234', 'hachemico@gmail.com', 1, 1),
(2, 'pbkdf2_sha256$216000$c5ViMFA5Fkuj$nwpPVtyZlV3EaND1Y24n40yJNfifZHG5GrnD8ZcxsZo=', NULL, 0, '2022-02-02 18:09:40.538592', '2022-02-02 18:09:40.538622', 'yomogana', 'yomo@gmail.com', 1, 0),
(3, 'pbkdf2_sha256$216000$mY7JzKbPD2ot$HGXOUGOdEmDYhaD0sHZaU/MV6A+JiTgEzG223G6TvPQ=', NULL, 0, '2022-02-02 18:13:47.497808', '2022-02-02 18:13:47.497833', 'hachese', 'hachese@gmail.com', 1, 0),
(4, 'pbkdf2_sha256$216000$wbr81REzbwRL$K+4CF/NKIKPebt8riw5DiC626NrS0Qj8nN1ZaOmX6QM=', NULL, 0, '2022-02-02 18:20:43.859906', '2022-02-02 18:20:43.859935', 'hache', 'hachesea@gmail.com', 1, 0),
(5, 'pbkdf2_sha256$216000$X43FcJRaov7t$4IwPwx1o1yW9D1nEpvdjJ3GyYqwvT0mpdzWksWR9c7A=', NULL, 0, '2022-02-02 18:32:14.055388', '2022-02-02 18:32:14.055415', 'asda', 'asdad@gmail.com', 1, 0),
(6, 'pbkdf2_sha256$216000$dqqly4UttseI$X2OBb9Ud3OqbXUdWBtlImg3dxWX4RXyk/rCaSUFAFZU=', NULL, 0, '2022-02-02 19:14:55.973651', '2022-02-02 19:14:55.973696', 'asdas', 'asdadasd@gmail.com', 1, 0),
(7, 'pbkdf2_sha256$216000$aT675GXkC66H$RHFs5OUOPVdZgC3b9cnxGtKp/Ae3ZulqLypRVqhSQoM=', NULL, 0, '2022-02-02 19:17:22.266692', '2022-02-02 19:17:22.266738', 'asdass', 'asdadasds@gmail.com', 1, 0),
(8, 'pbkdf2_sha256$216000$GP9I0Ssk1RTh$DyQJDm2wRctO6K5D2eemLjdln0ekpp5TQxBOacCfar4=', NULL, 0, '2022-02-02 19:18:18.220877', '2022-02-02 19:18:18.220906', 'asdsass', 'asdadasdss@gmail.com', 1, 0),
(9, 'pbkdf2_sha256$216000$PCN6NCHHv7Ro$IFDeoQ/LyjXPie+dC1I0OJ+/TCJmLXIYO1yHUoZRLdM=', NULL, 0, '2022-02-02 19:19:29.839759', '2022-02-02 19:19:29.839810', 'asdsasss', 'asdadasdsds@gmail.com', 1, 0),
(10, 'pbkdf2_sha256$216000$1f7M9stV83bE$djMphugSYf/6GpiqfC4cd/h+oeafcLYvZn/Q7K+/USo=', NULL, 0, '2022-02-02 19:20:11.347980', '2022-02-02 19:20:11.348026', 'adasads', 'asdadad@gmail.com', 1, 0),
(11, 'pbkdf2_sha256$216000$nMyxdpNEBy06$54xl1NAbszpXkZ0pql59JdIw8w7+8XnocmGOn/cEuRY=', NULL, 0, '2022-02-02 19:25:07.593420', '2022-02-02 19:25:07.593454', 'asadasd', 'adsadd@asada.com', 1, 0),
(12, 'pbkdf2_sha256$216000$RFv54a7e00MD$vRQwd+key+UAgxKW1WnVkQyHHWNcNma7YAp68Slt6U4=', NULL, 0, '2022-02-03 11:29:54.576759', '2022-02-03 11:29:54.576787', 'asdadadadad', 'adsadad@gmail.com', 1, 0),
(13, 'pbkdf2_sha256$216000$URqAYHfmNyx2$BDBOMe+iJfKK944av9Ab/LpcBRyjxakRXdCc3hagoY4=', NULL, 0, '2022-02-16 18:43:57.701231', '2022-02-16 18:43:57.701257', 'hache1234@gmail.com', 'hache1234@gmail.com', 1, 0),
(14, 'pbkdf2_sha256$216000$h8SQZf2rfACh$1jW5lx/BXE/JGndzldPLmiTxKDl/rvDJdJjR3QL3umQ=', NULL, 0, '2022-11-19 17:23:29.350834', '2022-11-19 17:23:29.350858', 'yomogan', 'yomogan@gmail.com', 1, 0),
(15, 'pbkdf2_sha256$216000$mQVSnGVCEEDl$s+CQGUDBIUYPSVsw466oJuKjRYAuEhsyuSpvufOdG98=', NULL, 0, '2022-11-19 19:08:05.710649', '2022-11-19 19:08:05.710674', 'felipe', 'felipe@gmail.com', 1, 0),
(16, 'pbkdf2_sha256$216000$1l1tH2wXB7HP$5G7DM8QsGSi+CHXGbTII61+wIekjwp8aGjebHVj26q0=', NULL, 0, '2022-11-21 20:22:12.699771', '2022-11-21 20:22:12.699797', 'joseluis', 'joseluis@gmail.com', 1, 0),
(17, 'pbkdf2_sha256$216000$1EbNT43QyCRC$y5geWRJtA/D1SnnZ6lXkdzvJJDwfkEFGbYcKKsaTubA=', NULL, 0, '2022-11-21 20:23:02.552006', '2022-11-21 20:23:02.552032', 'josel', 'josel@gmail.com', 1, 0),
(18, 'pbkdf2_sha256$216000$qYXgKL5ueSBB$sq3JblGv9hEJX3Zs35o/WEehuVFxilDPG3XFY6iZ66A=', NULL, 0, '2022-11-21 20:26:40.466919', '2022-11-21 20:26:40.466945', 'josela', 'josela@gmail.com', 1, 0),
(19, 'pbkdf2_sha256$216000$Cg3WSbiPj6az$8v8Idvt57hrvHjgdnZ++p5Z3L8GCzQYCPDW6U+JxdwU=', NULL, 0, '2022-11-22 10:46:38.034471', '2022-11-22 10:46:38.034587', 'tonet', 'tonet@gmail.com', 1, 0),
(20, 'pbkdf2_sha256$216000$ruTNEJPkZb03$SwnTYCa75lq7ykDWGuFsriCW7cQO3j8bANaZ3aeiRtA=', NULL, 0, '2022-11-22 10:59:05.726071', '2022-11-22 10:59:05.726099', 'jose', 'jose@gmail.com', 1, 0),
(21, 'pbkdf2_sha256$216000$7d8nd3Z5ZZKL$vSCYQj/Mp9j3lPDP8xh4fJXUd1n+k2EgRlSKROBi8WI=', NULL, 0, '2022-11-22 11:13:12.648241', '2022-11-22 11:13:12.648271', 'manuel', 'manuel@gmail.com', 1, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `authentication_user_groups`
--

CREATE TABLE `authentication_user_groups` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `authentication_user_user_permissions`
--

CREATE TABLE `authentication_user_user_permissions` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` int NOT NULL,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add content type', 4, 'add_contenttype'),
(14, 'Can change content type', 4, 'change_contenttype'),
(15, 'Can delete content type', 4, 'delete_contenttype'),
(16, 'Can view content type', 4, 'view_contenttype'),
(17, 'Can add session', 5, 'add_session'),
(18, 'Can change session', 5, 'change_session'),
(19, 'Can delete session', 5, 'delete_session'),
(20, 'Can view session', 5, 'view_session'),
(21, 'Can add user', 6, 'add_user'),
(22, 'Can change user', 6, 'change_user'),
(23, 'Can delete user', 6, 'delete_user'),
(24, 'Can view user', 6, 'view_user'),
(25, 'Can add profile', 7, 'add_profile'),
(26, 'Can change profile', 7, 'change_profile'),
(27, 'Can delete profile', 7, 'delete_profile'),
(28, 'Can view profile', 7, 'view_profile'),
(29, 'Can add bike', 8, 'add_bike'),
(30, 'Can change bike', 8, 'change_bike'),
(31, 'Can delete bike', 8, 'delete_bike'),
(32, 'Can view bike', 8, 'view_bike'),
(33, 'Can add station', 9, 'add_station'),
(34, 'Can change station', 9, 'change_station'),
(35, 'Can delete station', 9, 'delete_station'),
(36, 'Can view station', 9, 'view_station'),
(37, 'Can add slot', 10, 'add_slot'),
(38, 'Can change slot', 10, 'change_slot'),
(39, 'Can delete slot', 10, 'delete_slot'),
(40, 'Can view slot', 10, 'view_slot'),
(41, 'Can add rent bike', 11, 'add_rentbike'),
(42, 'Can change rent bike', 11, 'change_rentbike'),
(43, 'Can delete rent bike', 11, 'delete_rentbike'),
(44, 'Can view rent bike', 11, 'view_rentbike'),
(45, 'Can add incidence', 12, 'add_incidence'),
(46, 'Can change incidence', 12, 'change_incidence'),
(47, 'Can delete incidence', 12, 'delete_incidence'),
(48, 'Can view incidence', 12, 'view_incidence');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bikes_bike`
--

CREATE TABLE `bikes_bike` (
  `id` int NOT NULL,
  `serialNumber` varchar(100) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `available` tinyint(1) NOT NULL,
  `at_use` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `bikes_bike`
--

INSERT INTO `bikes_bike` (`id`, `serialNumber`, `created_at`, `available`, `at_use`) VALUES
(2, '2', '2022-02-03 12:25:06.866196', 1, 0),
(5, '5', '2022-02-19 19:42:46.185623', 1, 0),
(58, '58', '2022-02-21 10:01:42.973853', 0, 0),
(60, '60', '2022-02-21 11:15:28.672741', 0, 0),
(61, '61', '2022-02-21 11:16:33.290029', 1, 0),
(62, '62', '2022-02-21 11:18:42.650249', 1, 0),
(63, '63', '2022-02-21 17:06:11.187712', 1, 0),
(64, '64', '2022-02-21 17:55:14.996759', 1, 0),
(72, '72', '2022-02-21 18:16:29.603063', 1, 0),
(75, '75', '2022-11-14 15:43:59.758563', 1, 0),
(76, '76', '2022-11-14 15:44:28.518893', 1, 0),
(79, '79', '2022-11-14 15:48:29.691042', 1, 0),
(80, '80', '2022-11-14 15:53:13.833838', 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bikes_incidence`
--

CREATE TABLE `bikes_incidence` (
  `id` int NOT NULL,
  `description` varchar(600) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `status` varchar(200) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `bike_id` int DEFAULT NULL,
  `checked` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `bikes_incidence`
--

INSERT INTO `bikes_incidence` (`id`, `description`, `created_at`, `status`, `user_id`, `bike_id`, `checked`) VALUES
(1, ' La luz delantera está rota, y no alumbra.', '2022-02-22 12:19:03.882222', 'Resuelta', 13, 2, 1),
(2, 'El manillar está flojo.', '2022-02-22 16:24:12.792960', 'Pendiente', 1, 61, 1),
(4, 'El pedal derecho esta flojo.', '2022-02-22 17:51:11.318246', 'Pendiente', 13, 61, 1),
(5, 'La bateria se agota enseguida. Muy mal', '2022-02-22 18:49:55.858291', 'Pendiente', 1, 64, 1),
(6, 'A la bici le falta un freno.', '2022-02-23 10:22:19.044443', 'Resuelta', 1, 64, 1),
(7, 'Esta rota', '2022-02-23 10:32:26.690227', 'Resuelta', 1, 63, 1),
(8, 'La rueda trasera está torcida y es muy incomodo circular con ella.', '2022-02-23 10:36:04.441078', 'Resuelta', 13, 62, 1),
(9, 'La bici no funciona be.', '2022-02-23 17:32:09.610307', 'Resuelta', 1, 5, 1),
(10, 'La luz de esta bici no funciona', '2022-11-13 17:44:45.119365', 'Pendiente', 1, 5, 1),
(11, 'asda12313131', '2022-11-13 18:08:53.527061', 'Pendiente', 1, 5, 1),
(12, 'rarggrae54785kujy', '2022-11-13 18:10:19.442550', 'Pendiente', 1, 5, 1),
(13, '1124214142142', '2022-11-13 18:14:09.782232', 'Pendiente', 1, 5, 1),
(14, 'vcvcvcxvcxvxvxccxv', '2022-11-13 18:16:29.581638', 'Pendiente', 1, 5, 1),
(15, 'kkhjhkjkjhkhjhj', '2022-11-13 18:19:08.091880', 'Pendiente', 1, 5, 1),
(16, 'fggfhfghhgfhg', '2022-11-13 18:20:22.518900', 'Pendiente', 1, 5, 1),
(17, 'gdgdgddggdf', '2022-11-13 18:20:37.646302', 'Pendiente', 1, 5, 1),
(18, 'asdadadasda', '2022-11-13 18:21:23.459644', 'Pendiente', 1, 5, 1),
(19, '2113311331', '2022-11-13 18:22:19.612586', 'Pendiente', 1, 5, 1),
(20, 'vnvnbvnbvnb', '2022-11-13 18:23:22.213915', 'Resuelta', 1, 5, 1),
(21, 'fghgfhgfghfhfghgf', '2022-11-13 18:23:28.067763', 'Pendiente', 1, 5, 1),
(22, '76776767676', '2022-11-13 18:24:57.158743', 'Pendiente', 1, 5, 1),
(23, '332443434', '2022-11-13 18:26:21.609338', 'Pendiente', 1, 5, 1),
(24, 'qeqewe', '2022-11-13 18:26:46.844679', 'Pendiente', 1, 5, 1),
(25, 'adsdasadsads', '2022-11-13 18:28:36.964582', 'Pendiente', 1, 5, 1),
(26, 'adsadad', '2022-11-13 18:30:05.588114', 'Pendiente', 1, 5, 0),
(27, 'asdadadada', '2022-11-13 18:31:39.733737', 'Pendiente', 1, 5, 0),
(28, '12131313', '2022-11-13 18:32:58.685757', 'Resuelta', 1, 5, 1),
(29, 'adadsadas', '2022-11-13 18:33:47.199096', 'Pendiente', 1, 5, 1),
(30, 'aadsasaddsa', '2022-11-13 18:35:02.269017', 'Pendiente', 1, 61, 1),
(31, 'khjnklnmk', '2022-11-13 18:38:44.527628', 'Resuelta', 1, 61, 1),
(32, 'dasdsadaddsa', '2022-11-13 18:38:59.204599', 'Pendiente', 1, 61, 0),
(33, 'adadasdaddsa', '2022-11-13 19:04:10.934576', 'Pendiente', 1, 5, 1),
(34, '342432432432432', '2022-11-13 19:04:43.539252', 'Pendiente', 1, 5, 1),
(35, 'lggulglgkhlkh', '2022-11-14 08:32:44.563552', 'Resuelta', 1, 5, 1),
(36, 'hola ', '2022-11-14 10:57:08.737786', 'Resuelta', 1, 62, 1),
(37, 'Las ruedas están deshinchadas.', '2022-11-14 14:49:49.034329', 'Resuelta', 1, 61, 1),
(38, 'No funciona', '2022-11-18 14:30:16.859078', 'Pendiente', 1, 61, 1),
(39, 'Tiene los neumáticos sin aire', '2022-11-19 19:10:37.157916', 'Pendiente', 15, 63, 0),
(40, 'No funciona el freno trasero.', '2022-11-19 19:11:46.249604', 'Pendiente', 15, 64, 1),
(43, 'la llum no funciona! Manuel', '2022-11-22 12:01:53.648553', 'Resuelta', 21, 64, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bikes_rentbike`
--

CREATE TABLE `bikes_rentbike` (
  `id` int NOT NULL,
  `date_start` datetime(6) NOT NULL,
  `date_finish` datetime(6) DEFAULT NULL,
  `bike_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `from_station_id` int DEFAULT NULL,
  `to_station_id` int DEFAULT NULL,
  `slot_id` int DEFAULT NULL,
  `state` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `bikes_rentbike`
--

INSERT INTO `bikes_rentbike` (`id`, `date_start`, `date_finish`, `bike_id`, `user_id`, `from_station_id`, `to_station_id`, `slot_id`, `state`) VALUES
(44, '2022-02-14 17:48:42.197572', '2022-02-14 18:30:27.627804', 2, 1, 1, 1, 2, 0),
(47, '2022-02-14 18:28:56.199093', '2022-02-14 18:35:42.163604', 2, 1, 2, 2, 8, 0),
(48, '2022-02-14 18:34:39.240644', '2022-02-14 18:39:54.863174', 2, 1, 1, 2, 7, 0),
(53, '2022-02-14 21:05:47.912791', '2022-02-14 21:09:16.622364', 2, 1, 2, 1, 2, 0),
(57, '2022-02-15 09:25:11.789012', '2022-02-15 10:09:59.395643', 2, 1, 1, 1, 6, 0),
(66, '2022-02-15 11:01:51.266122', '2022-02-15 11:03:15.741698', 2, 1, 1, 1, 2, 0),
(67, '2022-02-15 11:05:10.740812', '2022-02-15 11:05:23.013895', 2, 1, 1, 1, 3, 0),
(68, '2022-02-15 11:06:49.293514', '2022-02-15 11:07:06.497555', 2, 1, 1, 1, 5, 0),
(69, '2022-02-15 11:06:49.293514', '2022-02-15 11:09:21.110611', 2, 1, 1, 1, 6, 0),
(78, '2022-02-15 12:19:21.498385', '2022-02-15 12:21:03.419266', 2, 1, 1, 1, 3, 0),
(82, '2022-02-15 16:36:29.622791', '2022-02-15 16:56:09.092317', 2, 1, 1, 1, 2, 0),
(83, '2022-02-15 16:36:29.622791', '2022-02-15 16:59:35.099837', 2, 1, 1, 1, 5, 0),
(84, '2022-02-15 16:36:29.622791', '2022-02-15 17:00:32.119226', 2, 1, 1, 1, 6, 0),
(85, '2022-02-15 16:36:29.622791', '2022-02-15 17:04:47.577490', 2, 1, 1, 1, 6, 0),
(86, '2022-02-15 16:36:29.622791', '2022-02-15 17:07:48.618138', 2, 1, 1, 1, 6, 0),
(87, '2022-02-15 16:36:29.622791', '2022-02-15 17:09:52.036696', 2, 1, 1, 1, 6, 0),
(88, '2022-02-15 16:36:29.622791', '2022-02-15 17:12:03.099580', 2, 1, 1, 1, 2, 0),
(89, '2022-02-15 16:36:29.622791', '2022-02-15 17:15:11.653721', 2, 1, 1, 1, 2, 0),
(90, '2022-02-15 17:11:38.489686', '2022-02-15 17:17:50.504155', 2, 1, 1, 1, 5, 0),
(91, '2022-02-15 17:11:38.489686', '2022-02-15 17:18:26.399429', 2, 1, 1, 1, 6, 0),
(92, '2022-02-15 17:11:38.489686', '2022-02-15 17:19:05.081602', 2, 1, 1, 1, 6, 0),
(93, '2022-02-15 17:11:38.489686', '2022-02-15 17:20:03.764279', 2, 1, 1, 1, 6, 0),
(94, '2022-02-15 17:11:38.489686', '2022-02-15 17:20:09.876159', 2, 1, 1, 1, 2, 0),
(95, '2022-02-15 17:11:38.489686', '2022-02-15 17:22:07.778508', 2, 1, 1, 1, 3, 0),
(121, '2022-02-15 18:44:20.691436', NULL, NULL, 1, 1, NULL, 3, 0),
(125, '2022-02-15 18:44:20.691436', NULL, 2, 1, 2, NULL, 8, 0),
(127, '2022-02-15 20:52:10.165493', NULL, 2, 1, 1, NULL, 2, 0),
(128, '2022-02-15 20:52:10.165493', NULL, NULL, 1, 1, NULL, 2, 0),
(129, '2022-02-16 08:55:20.131647', NULL, 2, 1, 1, NULL, 2, 0),
(130, '2022-02-16 08:55:20.131647', NULL, 2, 1, 1, NULL, 5, 0),
(131, '2022-02-16 09:59:11.657880', NULL, 2, 1, 2, NULL, 8, 0),
(132, '2022-02-16 10:01:42.249109', NULL, 2, 1, 2, NULL, 8, 0),
(136, '2022-02-16 10:10:44.050916', NULL, 2, 1, 1, NULL, 6, 0),
(137, '2022-02-16 10:10:44.050916', NULL, 2, 1, 2, NULL, 7, 0),
(142, '2022-02-16 10:34:21.227305', '2022-02-16 10:36:00.793572', 2, 1, 2, 1, 3, 0),
(143, '2022-02-16 10:34:21.227305', '2022-02-16 10:37:15.682441', 2, 1, 1, 1, 6, 0),
(144, '2022-02-16 10:37:55.025314', '2022-02-16 11:06:04.047179', 2, 1, 1, 1, 2, 0),
(145, '2022-02-16 10:37:55.025314', '2022-02-16 11:30:06.777301', 2, 1, 1, 2, 7, 0),
(149, '2022-02-16 10:37:55.025314', '2022-02-16 12:01:58.164402', 2, 1, 2, 1, 2, 0),
(150, '2022-02-16 10:37:55.025314', '2022-02-16 12:03:31.732207', 2, 1, 1, 1, 2, 0),
(151, '2022-02-16 10:37:55.025314', '2022-02-16 12:06:09.567289', 2, 1, 1, 2, 7, 0),
(164, '2022-02-16 17:36:38.473226', '2022-02-16 18:44:37.763857', 2, 13, 2, 1, 2, 0),
(165, '2022-02-17 12:06:27.235568', '2022-02-17 13:25:39.118125', 2, 1, 1, 1, 3, 0),
(166, '2022-02-17 15:49:32.623019', NULL, NULL, 1, 1, NULL, 2, 0),
(167, '2022-02-19 16:53:17.518293', '2022-02-19 18:14:12.266286', 2, 1, 1, 1, 3, 0),
(168, '2022-02-19 18:10:58.482511', '2022-02-19 18:19:24.258678', 2, 1, 1, 1, 3, 0),
(169, '2022-02-19 18:19:19.002774', '2022-02-19 18:20:48.308569', 2, 1, 1, 1, 3, 0),
(170, '2022-02-19 18:20:41.321451', NULL, 2, 1, 1, NULL, 3, 0),
(171, '2022-02-19 18:20:41.321451', NULL, 2, 1, 1, NULL, 3, 0),
(172, '2022-02-19 18:30:16.484502', NULL, 2, 1, 1, NULL, 3, 0),
(173, '2022-02-19 18:30:52.020532', '2022-02-19 18:37:11.797077', 2, 1, 1, 1, 3, 0),
(174, '2022-02-19 18:36:46.928138', '2022-02-19 18:41:32.600991', 2, 1, 1, 1, 5, 0),
(178, '2022-02-20 18:40:25.702923', NULL, 2, 1, 1, NULL, 5, 0),
(179, '2022-02-20 18:43:27.512790', NULL, 2, 1, 1, NULL, 5, 0),
(184, '2022-02-21 09:05:33.686029', '2022-02-21 09:25:12.223771', 2, 1, 1, 2, 7, 0),
(187, '2022-02-21 15:58:41.947960', '2022-02-21 18:46:11.704882', 5, 1, 1, 1, 5, 0),
(188, '2022-02-21 20:16:09.153109', '2022-02-21 21:40:20.656078', 72, 1, 2, 4, 18, 0),
(189, '2022-02-21 20:16:09.153109', '2022-02-21 21:40:31.448592', 61, 1, 4, 1, 6, 0),
(190, '2022-02-22 12:30:21.643829', '2022-02-22 13:07:53.743826', 63, 13, 4, 3, 14, 0),
(191, '2022-02-22 12:30:21.643829', '2022-02-22 13:08:05.140521', 60, 13, 3, 4, 19, 0),
(193, '2022-02-22 14:28:51.626697', '2022-02-22 16:40:28.418290', 5, 1, 1, 1, 2, 0),
(194, '2022-02-22 17:47:37.431760', '2022-02-22 17:53:19.880293', 61, 1, 1, 3, 16, 0),
(195, '2022-02-23 10:10:49.932852', '2022-02-23 10:36:42.715413', 62, 13, 4, 4, 21, 0),
(196, '2022-11-11 19:17:17.260736', '2022-11-12 15:52:43.818169', 5, 1, 1, 2, 13, 0),
(197, '2022-11-12 15:44:13.935849', '2022-11-12 15:52:54.668450', 2, 1, 2, 2, 7, 0),
(198, '2022-11-12 15:52:40.298359', '2022-11-12 15:53:17.783114', 5, 1, 1, 1, 3, 0),
(199, '2022-11-12 15:52:40.298359', '2022-11-12 15:53:27.882318', 5, 1, 1, 1, 6, 0),
(200, '2022-11-12 15:52:40.298359', '2022-11-12 15:53:48.292782', 62, 1, 4, 1, 2, 0),
(201, '2022-11-12 16:10:03.835617', '2022-11-13 12:38:57.407375', 5, 1, 1, 1, 2, 0),
(202, '2022-11-13 11:55:21.275032', '2022-11-13 12:50:46.357823', 62, 1, 1, 1, 3, 0),
(203, '2022-11-13 11:55:21.275032', '2022-11-13 13:26:06.814812', 5, 1, 1, 2, 13, 0),
(204, '2022-11-13 11:55:21.275032', '2022-11-13 13:26:11.859536', 64, 1, 2, 2, 12, 0),
(205, '2022-11-13 11:55:21.275032', '2022-11-13 13:26:21.021484', 5, 1, 2, 2, 13, 0),
(206, '2022-11-13 11:55:21.275032', '2022-11-13 13:26:27.523327', 64, 1, 2, 2, 12, 0),
(207, '2022-11-13 11:55:21.275032', '2022-11-13 13:26:32.573984', 58, 1, 2, 2, 8, 0),
(208, '2022-11-13 11:55:21.275032', '2022-11-13 13:26:37.109423', 2, 1, 2, 2, 7, 0),
(209, '2022-11-13 11:55:21.275032', '2022-11-13 13:26:39.029716', 58, 1, 2, 2, 8, 0),
(210, '2022-11-13 11:55:21.275032', '2022-11-13 13:26:41.492861', 2, 1, 2, 2, 7, 0),
(211, '2022-11-13 11:55:21.275032', '2022-11-13 13:26:50.159040', 58, 1, 2, 1, 5, 0),
(212, '2022-11-13 11:55:21.275032', '2022-11-13 13:26:52.973705', 62, 1, 1, 1, 6, 0),
(213, '2022-11-13 11:55:21.275032', '2022-11-13 13:28:26.417894', 58, 1, 1, 1, 5, 0),
(214, '2022-11-13 11:55:21.275032', '2022-11-13 13:29:05.565141', 62, 1, 1, 1, 6, 0),
(215, '2022-11-13 11:55:21.275032', '2022-11-13 13:29:58.991807', 58, 1, 1, 1, 5, 0),
(216, '2022-11-13 11:55:21.275032', '2022-11-13 14:11:08.662282', 62, 1, 1, 2, 13, 0),
(217, '2022-11-13 11:55:21.275032', '2022-11-13 17:28:27.754769', 5, 1, 2, 1, 6, 0),
(218, '2022-11-13 14:44:53.384474', '2022-11-14 12:52:53.478611', 58, 1, 1, 2, 8, 0),
(219, '2022-11-14 12:39:33.845509', '2022-11-14 12:39:33.845699', 62, 1, 2, 2, 13, 0),
(220, '2022-11-14 12:39:33.845509', '2022-11-14 14:37:16.137427', 64, 1, 2, 2, 12, 0),
(221, '2022-11-14 14:41:07.495766', '2022-11-14 14:43:41.004141', 5, 1, 1, 1, 2, 0),
(222, '2022-11-14 14:41:07.495766', '2022-11-14 14:48:16.536098', 5, 1, 1, 4, 21, 0),
(223, '2022-11-14 14:41:07.495766', '2022-11-14 14:49:22.202259', 61, 1, 3, 1, 5, 0),
(224, '2022-11-18 14:28:34.049685', '2022-11-18 14:29:50.127282', 61, 1, 1, 1, 2, 0),
(225, '2022-11-19 12:00:19.981742', '2022-11-19 16:59:46.018086', 61, 1, 1, 1, 3, 0),
(226, '2022-11-19 12:00:19.981742', '2022-11-19 17:24:35.924358', 61, 14, 1, 4, 20, 0),
(227, '2022-11-19 12:00:19.981742', '2022-11-19 18:08:02.661625', 60, 1, 4, 1, 3, 0),
(228, '2022-11-19 18:31:18.443593', '2022-11-19 19:09:58.827213', 60, 15, 1, 3, 17, 0),
(229, '2022-11-21 17:43:41.594010', '2022-11-21 17:47:33.265388', 58, 1, 2, 2, 13, 0),
(230, '2022-11-21 20:00:00.790465', '2022-11-21 20:27:46.721450', 2, 18, 2, 1, 2, 0),
(231, '2022-11-21 20:00:00.790465', '2022-11-21 20:33:39.339360', 64, 1, 2, 1, 5, 0),
(232, '2022-11-22 08:55:54.813899', '2022-11-22 11:04:55.621975', 64, 1, 1, 1, 5, 0),
(239, '2022-11-22 08:55:54.813899', '2022-11-22 12:01:23.455594', 64, 21, 1, 2, 8, 0),
(240, '2022-11-22 08:55:54.813899', '2022-11-22 12:25:14.841990', 2, 1, 1, 1, 6, 0),
(241, '2022-11-22 08:55:54.813899', '2022-11-22 12:28:04.678275', 2, 1, 1, 1, 2, 0),
(242, '2022-11-22 08:55:54.813899', '2022-11-22 12:29:19.205007', 2, 1, 1, 1, 6, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint UNSIGNED NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL
) ;

--
-- Volcado de datos para la tabla `django_admin_log`
--

INSERT INTO `django_admin_log` (`id`, `action_time`, `object_id`, `object_repr`, `action_flag`, `change_message`, `content_type_id`, `user_id`) VALUES
(1, '2022-01-27 19:08:08.792954', '1', 'Poliesportiu', 1, '[{\"added\": {}}]', 9, 1),
(2, '2022-01-27 19:08:23.496909', '2', 'Plaza_Concepcion', 1, '[{\"added\": {}}]', 9, 1),
(3, '2022-02-03 12:24:51.625787', '1', '0001', 1, '[{\"added\": {}}]', 8, 1),
(4, '2022-02-03 12:25:06.868719', '2', '0002', 1, '[{\"added\": {}}]', 8, 1),
(5, '2022-02-03 12:26:32.064065', '1', 'Poliesportiu', 1, '[{\"added\": {}}]', 10, 1),
(6, '2022-02-03 12:26:48.482837', '2', 'Poliesportiu', 1, '[{\"added\": {}}]', 10, 1),
(7, '2022-02-03 13:16:53.420387', '2', 'Poliesportiu', 2, '[{\"changed\": {\"fields\": [\"Id slot station\"]}}]', 10, 1),
(8, '2022-02-03 13:16:57.425646', '1', 'Poliesportiu', 2, '[{\"changed\": {\"fields\": [\"Id slot station\"]}}]', 10, 1),
(9, '2022-02-03 13:17:12.445377', '1', 'Poliesportiu', 2, '[{\"changed\": {\"fields\": [\"Id slot station\"]}}]', 10, 1),
(10, '2022-02-07 11:49:49.981281', '3', '0003', 1, '[{\"added\": {}}]', 8, 1),
(11, '2022-02-07 11:50:20.577033', '3', 'Poliesportiu', 1, '[{\"added\": {}}]', 10, 1),
(12, '2022-02-07 13:20:13.373340', '4', '0004', 1, '[{\"added\": {}}]', 8, 1),
(13, '2022-02-07 13:20:39.363754', '4', 'Poliesportiu', 1, '[{\"added\": {}}]', 10, 1),
(14, '2022-02-14 16:53:20.958303', '4', '4', 3, '', 8, 1),
(15, '2022-02-14 16:59:50.996779', '1', '1', 3, '', 8, 1),
(16, '2022-02-14 17:04:52.416707', '1', '(<Station: Poliesportiu>, None, \'No Disponible\')', 3, '', 10, 1),
(17, '2022-02-14 17:29:35.985483', '5', '(<Station: Poliesportiu>, None, \'disponible\')', 1, '[{\"added\": {}}]', 10, 1),
(18, '2022-02-14 17:30:26.875963', '6', '(<Station: Poliesportiu>, None, \'disponible\')', 1, '[{\"added\": {}}]', 10, 1),
(19, '2022-02-14 17:31:00.277317', '7', '(<Station: Plaza_Concepcion>, None, \'disponible\')', 1, '[{\"added\": {}}]', 10, 1),
(20, '2022-02-14 17:31:06.926229', '8', '(<Station: Plaza_Concepcion>, None, \'disponible\')', 1, '[{\"added\": {}}]', 10, 1),
(21, '2022-02-19 19:42:46.186456', '5', '4', 1, '[{\"added\": {}}]', 8, 1),
(22, '2022-02-20 18:24:15.297103', '11', '(\'9\', <Station: Plaza_Concepcion>, None, \'disponible\')', 1, '[{\"added\": {}}]', 10, 1),
(23, '2022-02-20 18:37:59.180549', '12', '(\'9\', <Station: Plaza_Concepcion>, None, \'Disponible\')', 1, '[{\"added\": {}}]', 10, 1),
(24, '2022-02-21 11:01:03.954260', '3', 'Universitat', 1, '[{\"added\": {}}]', 9, 1),
(25, '2022-02-21 11:02:18.936893', '4', 'Poligono', 1, '[{\"added\": {}}]', 9, 1),
(26, '2022-02-21 11:04:00.334313', '13', '(\'13\', <Station: Plaza_Concepcion>, None, \'Disponible\')', 1, '[{\"added\": {}}]', 10, 1),
(27, '2022-02-21 11:04:16.119790', '14', '(\'14\', <Station: Universitat>, None, \'Disponible\')', 1, '[{\"added\": {}}]', 10, 1),
(28, '2022-02-21 11:04:41.631689', '15', '(\'15\', <Station: Universitat>, None, \'Disponible\')', 1, '[{\"added\": {}}]', 10, 1),
(29, '2022-02-21 11:04:57.128044', '16', '(\'16\', <Station: Universitat>, None, \'Disponible\')', 1, '[{\"added\": {}}]', 10, 1),
(30, '2022-02-21 11:05:16.239067', '17', '(\'17\', <Station: Universitat>, None, \'Disponible\')', 1, '[{\"added\": {}}]', 10, 1),
(31, '2022-02-21 11:05:47.368955', '18', '(\'18\', <Station: Poligono>, None, \'Disponible\')', 1, '[{\"added\": {}}]', 10, 1),
(32, '2022-02-21 11:05:56.967278', '19', '(\'19\', <Station: Poligono>, None, \'Disponible\')', 1, '[{\"added\": {}}]', 10, 1),
(33, '2022-02-21 11:06:07.320765', '20', '(\'20\', <Station: Poligono>, None, \'Disponible\')', 1, '[{\"added\": {}}]', 10, 1),
(34, '2022-02-21 11:06:27.629463', '21', '(\'21\', <Station: Poligono>, None, \'Disponible\')', 1, '[{\"added\": {}}]', 10, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(6, 'authentication', 'user'),
(8, 'bikes', 'bike'),
(12, 'bikes', 'incidence'),
(11, 'bikes', 'rentbike'),
(4, 'contenttypes', 'contenttype'),
(7, 'profiles', 'profile'),
(5, 'sessions', 'session'),
(10, 'stations', 'slot'),
(9, 'stations', 'station');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` int NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2022-01-27 19:04:47.260207'),
(2, 'contenttypes', '0002_remove_content_type_name', '2022-01-27 19:04:47.310865'),
(3, 'auth', '0001_initial', '2022-01-27 19:04:47.356569'),
(4, 'auth', '0002_alter_permission_name_max_length', '2022-01-27 19:04:47.476242'),
(5, 'auth', '0003_alter_user_email_max_length', '2022-01-27 19:04:47.483139'),
(6, 'auth', '0004_alter_user_username_opts', '2022-01-27 19:04:47.488254'),
(7, 'auth', '0005_alter_user_last_login_null', '2022-01-27 19:04:47.493362'),
(8, 'auth', '0006_require_contenttypes_0002', '2022-01-27 19:04:47.495752'),
(9, 'auth', '0007_alter_validators_add_error_messages', '2022-01-27 19:04:47.501446'),
(10, 'auth', '0008_alter_user_username_max_length', '2022-01-27 19:04:47.509076'),
(11, 'auth', '0009_alter_user_last_name_max_length', '2022-01-27 19:04:47.515854'),
(12, 'auth', '0010_alter_group_name_max_length', '2022-01-27 19:04:47.528137'),
(13, 'auth', '0011_update_proxy_permissions', '2022-01-27 19:04:47.535644'),
(14, 'auth', '0012_alter_user_first_name_max_length', '2022-01-27 19:04:47.542467'),
(15, 'authentication', '0001_initial', '2022-01-27 19:04:47.593955'),
(16, 'admin', '0001_initial', '2022-01-27 19:04:47.723911'),
(17, 'admin', '0002_logentry_remove_auto_add', '2022-01-27 19:04:47.778362'),
(18, 'admin', '0003_logentry_add_action_flag_choices', '2022-01-27 19:04:47.786634'),
(19, 'bikes', '0001_initial', '2022-01-27 19:04:47.808937'),
(20, 'profiles', '0001_initial', '2022-01-27 19:04:47.862461'),
(21, 'sessions', '0001_initial', '2022-01-27 19:04:47.954339'),
(22, 'stations', '0001_initial', '2022-01-27 19:04:48.003492'),
(23, 'stations', '0002_slot_id_slot_station', '2022-02-03 13:15:58.984389'),
(24, 'stations', '0003_auto_20220203_1436', '2022-02-03 14:36:36.554637'),
(25, 'stations', '0004_auto_20220203_1444', '2022-02-03 14:44:42.028767'),
(26, 'stations', '0005_remove_slot_slot', '2022-02-03 14:46:49.271904'),
(27, 'profiles', '0002_profile_favorites', '2022-02-07 17:44:12.597726'),
(28, 'bikes', '0002_rentbike', '2022-02-10 18:31:25.844095'),
(29, 'bikes', '0003_auto_20220213_2053', '2022-02-13 20:53:13.668792'),
(30, 'bikes', '0004_auto_20220213_2054', '2022-02-13 20:54:51.934296'),
(31, 'bikes', '0005_auto_20220213_2100', '2022-02-13 21:00:36.054916'),
(32, 'bikes', '0006_auto_20220213_2102', '2022-02-13 21:02:20.868808'),
(33, 'bikes', '0007_auto_20220213_2119', '2022-02-13 21:19:55.266374'),
(34, 'bikes', '0008_auto_20220214_0839', '2022-02-14 08:39:09.825896'),
(35, 'stations', '0006_auto_20220214_0839', '2022-02-14 08:39:09.902435'),
(36, 'bikes', '0009_auto_20220214_0847', '2022-02-14 08:47:04.108682'),
(37, 'stations', '0007_auto_20220214_0847', '2022-02-14 08:47:04.206476'),
(38, 'bikes', '0010_auto_20220214_0847', '2022-02-14 08:47:30.935313'),
(39, 'stations', '0008_auto_20220214_0847', '2022-02-14 08:47:30.998821'),
(40, 'bikes', '0011_auto_20220214_0848', '2022-02-14 08:48:17.953139'),
(41, 'stations', '0009_auto_20220214_0848', '2022-02-14 08:48:18.010763'),
(42, 'bikes', '0012_auto_20220214_0854', '2022-02-14 08:54:40.064783'),
(43, 'stations', '0010_auto_20220214_0854', '2022-02-14 08:54:40.121417'),
(44, 'bikes', '0013_auto_20220214_1236', '2022-02-14 12:36:14.696731'),
(45, 'bikes', '0014_auto_20220214_1706', '2022-02-14 17:06:53.468035'),
(46, 'stations', '0011_auto_20220214_1706', '2022-02-14 17:06:53.520050'),
(47, 'bikes', '0015_auto_20220214_1710', '2022-02-14 17:10:29.295499'),
(48, 'stations', '0012_auto_20220214_1710', '2022-02-14 17:10:29.347402'),
(49, 'bikes', '0016_auto_20220214_1711', '2022-02-14 17:11:17.600224'),
(50, 'bikes', '0017_auto_20220214_1828', '2022-02-14 18:28:54.234306'),
(51, 'bikes', '0018_auto_20220215_0835', '2022-02-15 08:35:13.448990'),
(52, 'bikes', '0019_auto_20220215_0835', '2022-02-15 08:35:53.617076'),
(53, 'bikes', '0020_auto_20220215_0836', '2022-02-15 08:36:33.083626'),
(54, 'bikes', '0021_auto_20220215_0837', '2022-02-15 08:37:26.567197'),
(55, 'bikes', '0022_auto_20220215_0837', '2022-02-15 08:37:59.066950'),
(56, 'bikes', '0023_auto_20220215_0838', '2022-02-15 08:38:13.675012'),
(57, 'bikes', '0024_auto_20220215_0839', '2022-02-15 08:39:57.727434'),
(58, 'bikes', '0025_auto_20220215_0844', '2022-02-15 08:44:31.452113'),
(59, 'bikes', '0026_auto_20220215_0846', '2022-02-15 08:46:52.557444'),
(60, 'stations', '0013_slot_name', '2022-02-15 08:46:52.593740'),
(61, 'stations', '0014_auto_20220215_0835', '2022-02-15 08:46:52.611667'),
(62, 'stations', '0015_auto_20220215_0836', '2022-02-15 08:46:52.619642'),
(63, 'stations', '0016_remove_slot_slot', '2022-02-15 08:46:52.654292'),
(64, 'stations', '0017_slot_name', '2022-02-15 08:46:52.680791'),
(65, 'bikes', '0027_auto_20220215_1213', '2022-02-15 12:13:16.810000'),
(66, 'profiles', '0003_profile_rentactive', '2022-02-15 12:13:16.851640'),
(67, 'bikes', '0028_auto_20220217_2043', '2022-02-17 20:43:29.917914'),
(68, 'stations', '0018_slot_onebike', '2022-02-17 20:43:29.959555'),
(69, 'bikes', '0029_auto_20220219_1829', '2022-02-19 18:29:56.277292'),
(70, 'stations', '0019_auto_20220219_1829', '2022-02-19 18:29:56.390509'),
(71, 'bikes', '0030_auto_20220220_1748', '2022-02-20 17:48:35.586978'),
(72, 'stations', '0020_auto_20220220_1748', '2022-02-20 17:48:35.666480'),
(73, 'bikes', '0031_auto_20220220_1802', '2022-02-20 18:02:28.067471'),
(74, 'stations', '0021_auto_20220220_1802', '2022-02-20 18:02:28.148254'),
(75, 'bikes', '0032_auto_20220220_1839', '2022-02-20 18:39:47.982343'),
(76, 'bikes', '0033_auto_20220222_1122', '2022-02-22 11:22:31.317805'),
(77, 'bikes', '0034_auto_20220222_1139', '2022-02-22 11:39:13.048689'),
(78, 'bikes', '0035_auto_20220222_1215', '2022-02-22 12:15:09.830160'),
(79, 'bikes', '0036_auto_20220223_0915', '2022-02-23 09:15:51.233759'),
(80, 'bikes', '0037_auto_20221111_1722', '2022-11-11 17:23:49.723592'),
(81, 'bikes', '0038_auto_20221111_1726', '2022-11-11 17:26:24.913512'),
(82, 'bikes', '0039_auto_20221111_1824', '2022-11-11 18:24:32.450661'),
(83, 'bikes', '0040_auto_20221113_1847', '2022-11-13 18:47:47.289747'),
(84, 'bikes', '0041_auto_20221119_0915', '2022-11-19 09:15:55.469825'),
(85, 'bikes', '0042_auto_20221119_0921', '2022-11-19 09:21:51.539465');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `django_session`
--

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('2uour2yyc0y0ne5h70b4gopjd195ug9y', '.eJxVjMEOwiAQRP-FsyGQAls8evcbyLIsUjWQlPbU-O-2SQ86x3lvZhMB16WEtfMcpiSuQovLbxeRXlwPkJ5YH01Sq8s8RXko8qRd3lvi9-10_w4K9rKvYzIKCAiRtNEOQGUYldcmss3WZSaw6CENkYAZc-JIo2HnBtjDXny--ws4sQ:1nJeaK:axaNBIqw3UBcWD8rI8q7F0MssDBNUKqMqAp84R0AXeE', '2022-02-28 16:52:20.739150'),
('7gv3yzmac139vbfxlusuhs2yjyma7fqf', '.eJxVjMEOwiAQRP-FsyGQAls8evcbyLIsUjWQlPbU-O-2SQ86x3lvZhMB16WEtfMcpiSuQovLbxeRXlwPkJ5YH01Sq8s8RXko8qRd3lvi9-10_w4K9rKvYzIKCAiRtNEOQGUYldcmss3WZSaw6CENkYAZc-JIo2HnBtjDXny--ws4sQ:1nFb87:uD9dQXp3N25k1IFDGRYUnsFgSb4QBLwpbwVdoNl1i88', '2022-02-17 12:22:27.107832'),
('gth0879k7h62bk1egm60dub3fuf48bro', '.eJxVjMEOwiAQRP-FsyGQAls8evcbyLIsUjWQlPbU-O-2SQ86x3lvZhMB16WEtfMcpiSuQovLbxeRXlwPkJ5YH01Sq8s8RXko8qRd3lvi9-10_w4K9rKvYzIKCAiRtNEOQGUYldcmss3WZSaw6CENkYAZc-JIo2HnBtjDXny--ws4sQ:1nDA7I:zrwfBKcRaZwxSeqA88DyIS1yeHMIIhMHJo0CCGxXQ1U', '2022-02-10 19:07:32.579338'),
('uh58lcjsv44evmt0qwdmjgn4tz5nn17s', '.eJxVjMEOwiAQRP-FsyGQAls8evcbyLIsUjWQlPbU-O-2SQ86x3lvZhMB16WEtfMcpiSuQovLbxeRXlwPkJ5YH01Sq8s8RXko8qRd3lvi9-10_w4K9rKvYzIKCAiRtNEOQGUYldcmss3WZSaw6CENkYAZc-JIo2HnBtjDXny--ws4sQ:1osjRH:24eZW7yiJsn4xnvkCCLmU9JZ2g_Y7_nncCLs83LacQo', '2022-11-23 11:40:15.469086');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profiles_profile`
--

CREATE TABLE `profiles_profile` (
  `id` int NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `bio` longtext NOT NULL,
  `image` varchar(200) NOT NULL,
  `user_id` int NOT NULL,
  `rentActive` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `profiles_profile`
--

INSERT INTO `profiles_profile` (`id`, `created_at`, `updated_at`, `bio`, `image`, `user_id`, `rentActive`) VALUES
(1, '2022-01-27 19:07:15.941234', '2022-01-27 19:07:15.941437', 'No ride, no life 2', '', 1, 0),
(2, '2022-02-02 18:09:40.548353', '2022-02-02 18:09:40.548382', '', '', 2, 0),
(3, '2022-02-02 18:13:47.508021', '2022-02-02 18:13:47.508049', '', '', 3, 0),
(4, '2022-02-02 18:20:43.864437', '2022-02-02 18:20:43.864536', '', '', 4, 0),
(5, '2022-02-02 18:32:14.065202', '2022-02-02 18:32:14.065240', '', '', 5, 0),
(6, '2022-02-02 19:14:55.976697', '2022-02-02 19:14:55.976762', '', '', 6, 0),
(7, '2022-02-02 19:17:22.269924', '2022-02-02 19:17:22.269956', '', '', 7, 0),
(8, '2022-02-02 19:18:18.223410', '2022-02-02 19:18:18.223447', '', '', 8, 0),
(9, '2022-02-02 19:19:29.843146', '2022-02-02 19:19:29.843182', '', '', 9, 0),
(10, '2022-02-02 19:20:11.351519', '2022-02-02 19:20:11.351575', '', '', 10, 0),
(11, '2022-02-02 19:25:07.595968', '2022-02-02 19:25:07.596002', '', '', 11, 0),
(12, '2022-02-03 11:29:54.579544', '2022-02-03 11:29:54.579565', '', '', 12, 0),
(13, '2022-02-16 18:43:57.703468', '2022-02-16 18:43:57.703488', '', '', 13, 0),
(14, '2022-11-19 17:23:29.361761', '2022-11-19 17:23:29.361791', '', '', 14, 0),
(15, '2022-11-19 19:08:05.763204', '2022-11-19 19:08:05.763391', 'Never give up!', '', 15, 0),
(16, '2022-11-21 20:22:12.702612', '2022-11-21 20:22:12.702633', '', '', 16, 0),
(17, '2022-11-21 20:23:02.555193', '2022-11-21 20:23:02.555212', '', '', 17, 0),
(18, '2022-11-21 20:26:40.477784', '2022-11-21 20:26:40.477813', 'Con gans de vivir', '', 18, 0),
(19, '2022-11-22 10:46:38.045914', '2022-11-22 10:46:38.045949', '', '', 19, 0),
(20, '2022-11-22 10:59:05.777060', '2022-11-22 10:59:05.777212', '', '', 20, 0),
(21, '2022-11-22 11:13:12.659384', '2022-11-22 11:13:12.659412', 'VIVA LA VIDA!', '', 21, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profiles_profile_favorites`
--

CREATE TABLE `profiles_profile_favorites` (
  `id` int NOT NULL,
  `profile_id` int NOT NULL,
  `bike_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `profiles_profile_favorites`
--

INSERT INTO `profiles_profile_favorites` (`id`, `profile_id`, `bike_id`) VALUES
(94, 1, 61),
(74, 1, 62),
(73, 1, 64),
(96, 15, 60),
(98, 18, 2),
(100, 21, 64);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profiles_profile_follows`
--

CREATE TABLE `profiles_profile_follows` (
  `id` int NOT NULL,
  `from_profile_id` int NOT NULL,
  `to_profile_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stations_slot`
--

CREATE TABLE `stations_slot` (
  `id` int NOT NULL,
  `name` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `status` varchar(300) NOT NULL,
  `bike_id` int DEFAULT NULL,
  `station_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `stations_slot`
--

INSERT INTO `stations_slot` (`id`, `name`, `status`, `bike_id`, `station_id`) VALUES
(2, '2', 'Disponible', NULL, 1),
(3, '3', 'Disponible', NULL, 1),
(5, '5', 'Disponible', NULL, 1),
(6, '6', 'No Disponible', 2, 1),
(7, '7', 'Disponible', NULL, 2),
(8, '8', 'No Disponible', 64, 2),
(12, '12', 'Disponible', NULL, 2),
(13, '13', 'No Disponible', 58, 2),
(14, '14', 'No Disponible', 63, 3),
(15, '15', 'Disponible', NULL, 3),
(16, '16', 'Disponible', NULL, 3),
(17, '17', 'No Disponible', 60, 3),
(18, '18', 'No Disponible', 72, 4),
(19, '19', 'Disponible', NULL, 4),
(20, '20', 'No Disponible', 61, 4),
(21, '21', 'No Disponible', 5, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stations_station`
--

CREATE TABLE `stations_station` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `latitude` varchar(300) NOT NULL,
  `longitude` varchar(300) NOT NULL,
  `slot_number` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `stations_station`
--

INSERT INTO `stations_station` (`id`, `name`, `created_at`, `latitude`, `longitude`, `slot_number`) VALUES
(1, 'Poliesportiu', '2022-01-27 19:08:08.790840', '38.81185296434517', '-0.6105547', '4'),
(2, 'Plaza_Concepcion', '2022-01-27 19:08:23.494673', '38.82604651302107', '-0.6030326232784201', '4'),
(3, 'Universitat', '2022-02-21 11:01:03.952909', '38.8180426', '-0.6095397', '4'),
(4, 'Poligono', '2022-02-21 11:02:18.936300', '38.82670251002359', '-0.5891928181843735', '4');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `authentication_user`
--
ALTER TABLE `authentication_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `authentication_user_groups`
--
ALTER TABLE `authentication_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `authentication_user_groups_user_id_group_id_8af031ac_uniq` (`user_id`,`group_id`),
  ADD KEY `authentication_user_groups_group_id_6b5c44b7_fk_auth_group_id` (`group_id`);

--
-- Indices de la tabla `authentication_user_user_permissions`
--
ALTER TABLE `authentication_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `authentication_user_user_user_id_permission_id_ec51b09f_uniq` (`user_id`,`permission_id`),
  ADD KEY `authentication_user__permission_id_ea6be19a_fk_auth_perm` (`permission_id`);

--
-- Indices de la tabla `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indices de la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indices de la tabla `bikes_bike`
--
ALTER TABLE `bikes_bike`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `serialNumber` (`serialNumber`),
  ADD KEY `bikes_bike_available_7670b777` (`available`),
  ADD KEY `bikes_bike_at_use_100db157` (`at_use`);

--
-- Indices de la tabla `bikes_incidence`
--
ALTER TABLE `bikes_incidence`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bikes_incidence_user_id_95914bb6_fk_profiles_profile_id` (`user_id`),
  ADD KEY `bikes_incidence_bike_id_0ce6a480_fk_bikes_bike_id` (`bike_id`),
  ADD KEY `bikes_incidence_checked_943ffb69` (`checked`);

--
-- Indices de la tabla `bikes_rentbike`
--
ALTER TABLE `bikes_rentbike`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bikes_rentbike_from_station_id_4dbfb512_fk_stations_station_id` (`from_station_id`),
  ADD KEY `bikes_rentbike_to_station_id_dcc6ef13_fk_stations_station_id` (`to_station_id`),
  ADD KEY `bikes_rentbike_user_id_f645a718_fk_profiles_profile_id` (`user_id`),
  ADD KEY `bikes_rentbike_slot_id_9a519199_fk_stations_slot_id` (`slot_id`),
  ADD KEY `bikes_rentbike_state_3eb49aad` (`state`),
  ADD KEY `bikes_rentbike_bike_id_3107c521` (`bike_id`);

--
-- Indices de la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_authentication_user_id` (`user_id`);

--
-- Indices de la tabla `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indices de la tabla `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Indices de la tabla `profiles_profile`
--
ALTER TABLE `profiles_profile`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`),
  ADD KEY `profiles_profile_rentActive_3e68d021` (`rentActive`);

--
-- Indices de la tabla `profiles_profile_favorites`
--
ALTER TABLE `profiles_profile_favorites`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `profiles_profile_favorites_profile_id_bike_id_c52c719d_uniq` (`profile_id`,`bike_id`),
  ADD KEY `profiles_profile_favorites_bike_id_7c09e016_fk_bikes_bike_id` (`bike_id`);

--
-- Indices de la tabla `profiles_profile_follows`
--
ALTER TABLE `profiles_profile_follows`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `profiles_profile_follows_from_profile_id_to_profi_45d55f0f_uniq` (`from_profile_id`,`to_profile_id`),
  ADD KEY `profiles_profile_fol_to_profile_id_8fcf6d8b_fk_profiles_` (`to_profile_id`);

--
-- Indices de la tabla `stations_slot`
--
ALTER TABLE `stations_slot`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `stations_slot_bike_id_ff035efc_uniq` (`bike_id`),
  ADD KEY `stations_slot_station_id_5681ed9a_fk_stations_station_id` (`station_id`);

--
-- Indices de la tabla `stations_station`
--
ALTER TABLE `stations_station`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `authentication_user`
--
ALTER TABLE `authentication_user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `authentication_user_groups`
--
ALTER TABLE `authentication_user_groups`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `authentication_user_user_permissions`
--
ALTER TABLE `authentication_user_user_permissions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT de la tabla `bikes_bike`
--
ALTER TABLE `bikes_bike`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT de la tabla `bikes_incidence`
--
ALTER TABLE `bikes_incidence`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT de la tabla `bikes_rentbike`
--
ALTER TABLE `bikes_rentbike`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=243;

--
-- AUTO_INCREMENT de la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

--
-- AUTO_INCREMENT de la tabla `profiles_profile`
--
ALTER TABLE `profiles_profile`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `profiles_profile_favorites`
--
ALTER TABLE `profiles_profile_favorites`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT de la tabla `profiles_profile_follows`
--
ALTER TABLE `profiles_profile_follows`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `stations_slot`
--
ALTER TABLE `stations_slot`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `stations_station`
--
ALTER TABLE `stations_station`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `authentication_user_groups`
--
ALTER TABLE `authentication_user_groups`
  ADD CONSTRAINT `authentication_user__user_id_30868577_fk_authentic` FOREIGN KEY (`user_id`) REFERENCES `authentication_user` (`id`),
  ADD CONSTRAINT `authentication_user_groups_group_id_6b5c44b7_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Filtros para la tabla `authentication_user_user_permissions`
--
ALTER TABLE `authentication_user_user_permissions`
  ADD CONSTRAINT `authentication_user__permission_id_ea6be19a_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `authentication_user__user_id_736ebf7e_fk_authentic` FOREIGN KEY (`user_id`) REFERENCES `authentication_user` (`id`);

--
-- Filtros para la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Filtros para la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Filtros para la tabla `bikes_incidence`
--
ALTER TABLE `bikes_incidence`
  ADD CONSTRAINT `bikes_incidence_bike_id_0ce6a480_fk_bikes_bike_id` FOREIGN KEY (`bike_id`) REFERENCES `bikes_bike` (`id`),
  ADD CONSTRAINT `bikes_incidence_user_id_95914bb6_fk_profiles_profile_id` FOREIGN KEY (`user_id`) REFERENCES `profiles_profile` (`id`);

--
-- Filtros para la tabla `bikes_rentbike`
--
ALTER TABLE `bikes_rentbike`
  ADD CONSTRAINT `bikes_rentbike_bike_id_3107c521_fk_bikes_bike_id` FOREIGN KEY (`bike_id`) REFERENCES `bikes_bike` (`id`),
  ADD CONSTRAINT `bikes_rentbike_from_station_id_4dbfb512_fk_stations_station_id` FOREIGN KEY (`from_station_id`) REFERENCES `stations_station` (`id`),
  ADD CONSTRAINT `bikes_rentbike_slot_id_9a519199_fk_stations_slot_id` FOREIGN KEY (`slot_id`) REFERENCES `stations_slot` (`id`),
  ADD CONSTRAINT `bikes_rentbike_to_station_id_dcc6ef13_fk_stations_station_id` FOREIGN KEY (`to_station_id`) REFERENCES `stations_station` (`id`),
  ADD CONSTRAINT `bikes_rentbike_user_id_f645a718_fk_profiles_profile_id` FOREIGN KEY (`user_id`) REFERENCES `profiles_profile` (`id`);

--
-- Filtros para la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_authentication_user_id` FOREIGN KEY (`user_id`) REFERENCES `authentication_user` (`id`);

--
-- Filtros para la tabla `profiles_profile`
--
ALTER TABLE `profiles_profile`
  ADD CONSTRAINT `profiles_profile_user_id_a3e81f91_fk_authentication_user_id` FOREIGN KEY (`user_id`) REFERENCES `authentication_user` (`id`);

--
-- Filtros para la tabla `profiles_profile_favorites`
--
ALTER TABLE `profiles_profile_favorites`
  ADD CONSTRAINT `profiles_profile_fav_profile_id_261051d8_fk_profiles_` FOREIGN KEY (`profile_id`) REFERENCES `profiles_profile` (`id`),
  ADD CONSTRAINT `profiles_profile_favorites_bike_id_7c09e016_fk_bikes_bike_id` FOREIGN KEY (`bike_id`) REFERENCES `bikes_bike` (`id`);

--
-- Filtros para la tabla `profiles_profile_follows`
--
ALTER TABLE `profiles_profile_follows`
  ADD CONSTRAINT `profiles_profile_fol_from_profile_id_c435a47c_fk_profiles_` FOREIGN KEY (`from_profile_id`) REFERENCES `profiles_profile` (`id`),
  ADD CONSTRAINT `profiles_profile_fol_to_profile_id_8fcf6d8b_fk_profiles_` FOREIGN KEY (`to_profile_id`) REFERENCES `profiles_profile` (`id`);

--
-- Filtros para la tabla `stations_slot`
--
ALTER TABLE `stations_slot`
  ADD CONSTRAINT `stations_slot_bike_id_ff035efc_fk_bikes_bike_id` FOREIGN KEY (`bike_id`) REFERENCES `bikes_bike` (`id`),
  ADD CONSTRAINT `stations_slot_station_id_5681ed9a_fk_stations_station_id` FOREIGN KEY (`station_id`) REFERENCES `stations_station` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
