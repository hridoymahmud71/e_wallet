-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2022 at 04:29 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `e_wallet`
--

-- --------------------------------------------------------

--
-- Table structure for table `currencies`
--

CREATE TABLE `currencies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `code` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `currencies`
--

INSERT INTO `currencies` (`id`, `code`, `name`, `active`, `created_at`, `updated_at`) VALUES
(1, 'usd', 'US Doller', 1, NULL, NULL),
(2, 'eur', 'Euro', 1, NULL, NULL),
(3, 'gbp', 'British pound', 1, NULL, NULL),
(4, 'inr', 'Indian Rupee', 1, NULL, NULL),
(5, 'bdt', 'Bangladeshi Taka', 1, NULL, NULL),
(6, 'pkr', 'Pakistani Rupee', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `exchange_rates`
--

CREATE TABLE `exchange_rates` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `currency` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rate` decimal(20,2) NOT NULL DEFAULT 0.00,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `exchange_rates`
--

INSERT INTO `exchange_rates` (`id`, `currency`, `rate`, `created_at`, `updated_at`) VALUES
(1, 'AED', '3.67', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(2, 'AFN', '87.17', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(3, 'ALL', '115.54', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(4, 'AMD', '454.43', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(5, 'ANG', '1.80', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(6, 'AOA', '409.20', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(7, 'ARS', '117.82', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(8, 'AUD', '1.43', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(9, 'AWG', '1.80', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(10, 'AZN', '1.70', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(11, 'BAM', '1.87', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(12, 'BBD', '2.00', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(13, 'BDT', '87.57', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(14, 'BGN', '1.87', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(15, 'BHD', '0.38', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(16, 'BIF', '2038.15', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(17, 'BMD', '1.00', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(18, 'BND', '1.39', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(19, 'BOB', '6.89', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(20, 'BRL', '5.06', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(21, 'BSD', '1.00', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(22, 'BTC', '0.00', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(23, 'BTN', '77.60', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(24, 'BWP', '12.30', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(25, 'BYN', '3.37', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(26, 'BZD', '2.02', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(27, 'CAD', '1.28', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(28, 'CDF', '2000.85', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(29, 'CHF', '1.00', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(30, 'CLF', '0.03', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(31, 'CLP', '857.78', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(32, 'CNH', '6.76', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(33, 'CNY', '6.75', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(34, 'COP', '4099.67', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(35, 'CRC', '671.62', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(36, 'CUC', '1.00', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(37, 'CUP', '25.75', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(38, 'CVE', '106.33', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(39, 'CZK', '23.63', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(40, 'DJF', '177.67', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(41, 'DKK', '7.11', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(42, 'DOP', '55.11', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(43, 'DZD', '146.28', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(44, 'EGP', '18.27', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(45, 'ERN', '15.00', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(46, 'ETB', '51.64', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(47, 'EUR', '0.96', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(48, 'FJD', '2.18', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(49, 'FKP', '0.80', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(50, 'GBP', '0.80', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(51, 'GEL', '2.99', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(52, 'GGP', '0.80', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(53, 'GHS', '7.65', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(54, 'GIP', '0.80', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(55, 'GMD', '53.65', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(56, 'GNF', '8767.46', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(57, 'GTQ', '7.67', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(58, 'GYD', '209.28', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(59, 'HKD', '7.85', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(60, 'HNL', '24.46', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(61, 'HRK', '7.19', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(62, 'HTG', '111.03', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(63, 'HUF', '371.95', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(64, 'IDR', '14640.08', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(65, 'ILS', '3.38', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(66, 'IMP', '0.80', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(67, 'INR', '77.64', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(68, 'IQD', '1459.96', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(69, 'IRR', '42400.00', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(70, 'ISK', '131.98', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(71, 'JEP', '0.80', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(72, 'JMD', '155.03', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(73, 'JOD', '0.71', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(74, 'JPY', '129.40', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(75, 'KES', '116.30', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(76, 'KGS', '83.04', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(77, 'KHR', '4056.29', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(78, 'KMF', '472.50', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(79, 'KPW', '900.00', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(80, 'KRW', '1272.85', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(81, 'KWD', '0.31', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(82, 'KYD', '0.83', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(83, 'KZT', '432.87', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(84, 'LAK', '12993.27', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(85, 'LBP', '1560.82', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(86, 'LKR', '349.33', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(87, 'LRD', '151.55', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(88, 'LSL', '16.23', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(89, 'LYD', '4.83', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(90, 'MAD', '10.09', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(91, 'MDL', '19.07', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(92, 'MGA', '3995.84', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(93, 'MKD', '59.04', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(94, 'MMK', '1852.02', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(95, 'MNT', '3097.07', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(96, 'MOP', '8.09', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(97, 'MRU', '36.46', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(98, 'MUR', '43.25', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(99, 'MVR', '15.45', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(100, 'MWK', '816.17', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(101, 'MXN', '20.02', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(102, 'MYR', '4.39', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(103, 'MZN', '63.85', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(104, 'NAD', '16.21', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(105, 'NGN', '415.25', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(106, 'NIO', '35.80', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(107, 'NOK', '9.68', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(108, 'NPR', '124.16', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(109, 'NZD', '1.58', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(110, 'OMR', '0.39', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(111, 'PAB', '1.00', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(112, 'PEN', '3.77', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(113, 'PGK', '3.52', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(114, 'PHP', '52.46', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(115, 'PKR', '193.65', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(116, 'PLN', '4.45', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(117, 'PYG', '6881.96', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(118, 'QAR', '3.64', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(119, 'RON', '4.73', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(120, 'RSD', '112.29', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(121, 'RUB', '64.67', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(122, 'RWF', '1023.27', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(123, 'SAR', '3.75', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(124, 'SBD', '8.12', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(125, 'SCR', '13.43', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(126, 'SDG', '454.00', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(127, 'SEK', '9.98', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(128, 'SGD', '1.39', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(129, 'SHP', '0.80', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(130, 'SLL', '12836.30', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(131, 'SOS', '579.18', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(132, 'SRD', '20.99', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(133, 'SSP', '130.26', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(134, 'STD', '22135.09', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(135, 'STN', '23.63', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(136, 'SVC', '8.75', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(137, 'SYP', '2512.53', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(138, 'SZL', '16.24', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(139, 'THB', '34.55', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(140, 'TJS', '12.51', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(141, 'TMT', '3.51', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(142, 'TND', '3.06', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(143, 'TOP', '2.33', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(144, 'TRY', '15.87', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(145, 'TTD', '6.81', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(146, 'TWD', '29.68', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(147, 'TZS', '2325.00', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(148, 'UAH', '29.55', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(149, 'UGX', '3624.05', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(150, 'USD', '1.00', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(151, 'UYU', '41.45', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(152, 'UZS', '11157.98', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(153, 'VES', '4.78', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(154, 'VND', '23120.50', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(155, 'VUV', '115.77', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(156, 'WST', '2.63', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(157, 'XAF', '626.89', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(158, 'XAG', '0.05', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(159, 'XAU', '0.00', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(160, 'XCD', '2.70', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(161, 'XDR', '0.73', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(162, 'XOF', '626.89', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(163, 'XPD', '0.00', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(164, 'XPF', '114.04', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(165, 'XPT', '0.00', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(166, 'YER', '250.30', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(167, 'ZAR', '16.09', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(168, 'ZMW', '17.03', '2022-05-17 02:26:10', '2022-05-17 02:26:10'),
(169, 'ZWL', '322.00', '2022-05-17 02:26:10', '2022-05-17 02:26:10');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_05_14_052540_create_user_wallets_table', 1),
(6, '2022_05_14_054818_create_user_wallet_transactions_table', 1),
(7, '2022_05_15_085427_create_currencies_table', 1),
(8, '2022_05_16_035042_create_exchange_rates_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'API Token', '46d80669b7c174e61e77c24482dcaa79dda3254472f3e802abfcefb6b6f2acb8', '[\"*\"]', NULL, '2022-05-17 02:03:31', '2022-05-17 02:03:31'),
(2, 'App\\Models\\User', 2, 'API Token', '4dd2a661036f892a62a0d3a3bf3fbaf4be4156c9f7eeb21f965566c0cb797e21', '[\"*\"]', NULL, '2022-05-17 02:04:05', '2022-05-17 02:04:05'),
(3, 'App\\Models\\User', 3, 'API Token', 'f35947353180ab2f67adf167301a1d657ec9b246c0876264ec551d3483b52a0a', '[\"*\"]', NULL, '2022-05-17 02:04:13', '2022-05-17 02:04:13'),
(4, 'App\\Models\\User', 4, 'API Token', '85e0817ec5952346ee3a7b1355fcca16681b372f7f67e7a260ececf891c39a40', '[\"*\"]', NULL, '2022-05-17 02:04:34', '2022-05-17 02:04:34'),
(5, 'App\\Models\\User', 5, 'API Token', '5798177d35eb6c87ba0ddb3789fa9006a4d702720c49f4e845d7abb91bb85aa9', '[\"*\"]', NULL, '2022-05-17 02:04:49', '2022-05-17 02:04:49'),
(6, 'App\\Models\\User', 1, 'API Token', '530485c7f4882dfd039ad0e2b8fe0fc061e4d058b7e0a961923e0ce4b832819d', '[\"*\"]', '2022-05-17 02:45:42', '2022-05-17 02:24:23', '2022-05-17 02:45:42'),
(7, 'App\\Models\\User', 2, 'API Token', '4b9cf4cd107adc863999ac0760db7e517dfb87172692439068017203ce046fd8', '[\"*\"]', NULL, '2022-05-17 03:17:20', '2022-05-17 03:17:20'),
(8, 'App\\Models\\User', 2, 'API Token', '3e7de6109607e796dca12f4e79216d33c6c9323c340ce78bcdcf1ba58ca1b879', '[\"*\"]', '2022-05-17 03:28:41', '2022-05-17 03:21:15', '2022-05-17 03:28:41'),
(9, 'App\\Models\\User', 3, 'API Token', '1d1586e866f1e97f42db93f0ee60a85ca2be667d0197974df15c7a33a1bb1183', '[\"*\"]', '2022-05-17 05:13:47', '2022-05-17 03:29:24', '2022-05-17 05:13:47'),
(17, 'App\\Models\\User', 1, 'API Token', '3f57d7c06f224f0e50a5d034d620ffdd12cfcc3ca4d517c641ba48c6026e4781', '[\"*\"]', '2022-05-18 02:26:42', '2022-05-17 08:54:13', '2022-05-18 02:26:42'),
(18, 'App\\Models\\User', 6, 'API Token', 'ec8e1a3e8a683e41bbba95524b220f32cff7a54ff711f349ee2d55bfda74236d', '[\"*\"]', '2022-05-18 07:32:26', '2022-05-18 02:26:58', '2022-05-18 07:32:26'),
(19, 'App\\Models\\User', 1, 'API Token', '4ca62a552e6d7f172d10c4b34877335bb5b4c245d172fb73144bfd42704defb1', '[\"*\"]', NULL, '2022-05-21 05:19:26', '2022-05-21 05:19:26'),
(20, 'App\\Models\\User', 1, 'API Token', '1e3590341d205757cd52b1071598d9340eb9b18d2e3e7a6db91f2b73f0375270', '[\"*\"]', NULL, '2022-05-21 05:19:49', '2022-05-21 05:19:49'),
(21, 'App\\Models\\User', 1, 'API Token', 'b8fab998b7cf05cb5033a84478a51494fa8b092c982fd8cd71d0ae661c7184c7', '[\"*\"]', NULL, '2022-05-21 05:19:51', '2022-05-21 05:19:51'),
(23, 'App\\Models\\User', 1, 'API Token', '23c0ada0e62d1169e33db8cc267b55352385115916b59edb0625bc87a2ab5e58', '[\"*\"]', NULL, '2022-05-21 05:44:07', '2022-05-21 05:44:07'),
(24, 'App\\Models\\User', 1, 'API Token', 'c12835b7a56c38c88140f016e91bb62c34dcfad79718fe92edc0ebd4d5bc6a65', '[\"*\"]', NULL, '2022-05-21 05:45:27', '2022-05-21 05:45:27'),
(25, 'App\\Models\\User', 1, 'API Token', '2d932530dcdca8e72fab645a0965b2d59a93ad4b23a14ae66a06b0568eb94259', '[\"*\"]', '2022-05-21 16:14:40', '2022-05-21 05:51:54', '2022-05-21 16:14:40'),
(26, 'App\\Models\\User', 1, 'API Token', 'c9e9bf22454f34d92447a5452009792105e7c6992a94ea5b79a9de4891d92086', '[\"*\"]', NULL, '2022-05-21 17:12:45', '2022-05-21 17:12:45'),
(27, 'App\\Models\\User', 1, 'API Token', '739dbe7f111c2c0d8a7306f4ee12462ca4603336ba79c08f479914dd2cacd706', '[\"*\"]', NULL, '2022-05-21 17:32:35', '2022-05-21 17:32:35'),
(28, 'App\\Models\\User', 1, 'API Token', 'd850b342b26ba3e3a9462372a1f03f4cd5378c468770b2ddb32b9e63b23df400', '[\"*\"]', NULL, '2022-05-22 00:34:42', '2022-05-22 00:34:42'),
(29, 'App\\Models\\User', 6, 'API Token', 'ac8dd77c244a8b36f30ea7fc162f6f1483f02313b3329b61fab4ee048996f6cd', '[\"*\"]', NULL, '2022-05-22 01:14:09', '2022-05-22 01:14:09'),
(30, 'App\\Models\\User', 6, 'API Token', 'fd617ea4a35beba1fd828fa578918f59c15159c0babf9009328072e2246a7b26', '[\"*\"]', '2022-05-22 04:17:09', '2022-05-22 01:25:02', '2022-05-22 04:17:09'),
(31, 'App\\Models\\User', 6, 'API Token', '16a945ceb86d13fce7763e5d52e20108bd7e7d546f2c6cd261061334b32cf6a8', '[\"*\"]', '2022-05-22 04:33:42', '2022-05-22 01:31:43', '2022-05-22 04:33:42'),
(32, 'App\\Models\\User', 6, 'API Token', '0a14412439cebe53ed862e5c49d419924a76212ecafd82a095077db8710586cc', '[\"*\"]', NULL, '2022-05-22 07:29:24', '2022-05-22 07:29:24'),
(33, 'App\\Models\\User', 1, 'API Token', '966299ad1e66e2e289cfbc0e288e862ad29d79f1eb106571e35714f50107d607', '[\"*\"]', NULL, '2022-05-22 07:31:42', '2022-05-22 07:31:42'),
(34, 'App\\Models\\User', 6, 'API Token', '3404021d587e6217dc604a6aab72b0cee0f0a58bc8b5287bf8ed93b041d26f37', '[\"*\"]', NULL, '2022-05-22 07:33:11', '2022-05-22 07:33:11'),
(35, 'App\\Models\\User', 6, 'API Token', '6f2f3845db2e91f3dfb07ff9e8f8f6c27affa6f2067c2ab044b0997b9033d0a9', '[\"*\"]', NULL, '2022-05-22 07:36:26', '2022-05-22 07:36:26'),
(36, 'App\\Models\\User', 1, 'API Token', 'cb9bcf4b0b8821289df37c0deaa304b1a94a5b38a7464a9dfda77109c9e6b8e1', '[\"*\"]', NULL, '2022-05-22 07:40:56', '2022-05-22 07:40:56'),
(37, 'App\\Models\\User', 1, 'API Token', '039c3c2b49c20179b99d82ef9623f106ba6c363850c4d017517e9c06e4c0017d', '[\"*\"]', NULL, '2022-05-22 07:45:49', '2022-05-22 07:45:49'),
(38, 'App\\Models\\User', 6, 'API Token', '8758c0fd1d8625ba55cd3d7feb490e511c9916a87c2208a7a47e753838a97981', '[\"*\"]', NULL, '2022-05-22 08:18:57', '2022-05-22 08:18:57'),
(39, 'App\\Models\\User', 6, 'API Token', '246195c9ead62cd9e4b92d9204056b1e5de2827161fb2724c4a5514fb48ce674', '[\"*\"]', NULL, '2022-05-22 08:28:11', '2022-05-22 08:28:11'),
(40, 'App\\Models\\User', 1, 'API Token', 'e4f02a10e1088710530168371763657459730ff5d21b5dd87001dd68f657aa5d', '[\"*\"]', NULL, '2022-05-22 08:28:20', '2022-05-22 08:28:20');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `role`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Customer One', 'user', 'customer1@example.com', '2022-05-17 02:03:31', '$2y$10$RzOTwyoWIec7EBny5QN.h..fOLBFjA1l5louIOhAPBboKyFuKTUBW', NULL, '2022-05-17 02:03:31', '2022-05-17 02:03:31'),
(2, 'Customer Two', 'user', 'customer2@example.com', '2022-05-17 02:04:05', '$2y$10$NmOPM/9A2S1/HkaskZp/1eIwxe02NJqk9HAjvWGe9w.LoJWZ9z/my', NULL, '2022-05-17 02:04:05', '2022-05-17 02:04:05'),
(3, 'Customer Three', 'user', 'customer3@example.com', '2022-05-17 02:04:12', '$2y$10$oTVOjS5ISrsDmttMDf2ZhucZuIRZPNrvvOandxjrcrnM94lU43ER2', NULL, '2022-05-17 02:04:12', '2022-05-17 02:04:12'),
(4, 'Customer Four', 'user', 'customer4@example.com', '2022-05-17 02:04:34', '$2y$10$OpkA9II/qPv5uz3R5Rq9FObxxe1YW2s3LIT6D.6nPAgFnRRciiOq.', NULL, '2022-05-17 02:04:34', '2022-05-17 02:04:34'),
(5, 'Customer Five', 'user', 'customer5@example.com', '2022-05-17 02:04:49', '$2y$10$f8jt2lFJfxknQlMOibCpXemPtGQv0p3EsOCj99H90FytFl46onCii', NULL, '2022-05-17 02:04:49', '2022-05-17 02:04:49'),
(6, 'admin@example.com', 'admin', 'admin@example.com', '2022-05-17 05:15:43', '$2y$10$R5llnrvzcmUrwu7YwRNqT.hOC0EuZtYao03yBaTQXcYGjScoG0O/K', NULL, '2022-05-17 05:15:43', '2022-05-17 05:15:43');

-- --------------------------------------------------------

--
-- Table structure for table `user_wallets`
--

CREATE TABLE `user_wallets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `wallet_number` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `default_currency` char(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'usd',
  `balance` decimal(20,2) NOT NULL DEFAULT 0.00,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_wallets`
--

INSERT INTO `user_wallets` (`id`, `user_id`, `wallet_number`, `default_currency`, `balance`, `created_at`, `updated_at`) VALUES
(1, 1, '810594585302', 'inr', '842.06', '2022-05-17 02:03:31', '2022-05-22 08:28:28'),
(2, 2, '414836937834', 'gpb', '847.93', '2022-05-17 02:04:05', '2022-05-17 03:34:44'),
(3, 3, '890203377872', 'bdt', '850.43', '2022-05-17 02:04:12', '2022-05-21 13:10:50'),
(4, 4, '498122566243', 'inr', '844.22', '2022-05-17 02:04:34', '2022-05-21 16:43:10'),
(5, 5, '745441288685', 'pkr', '1000.00', '2022-05-17 02:04:49', '2022-05-17 02:04:49');

-- --------------------------------------------------------

--
-- Table structure for table `user_wallet_transactions`
--

CREATE TABLE `user_wallet_transactions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `transaction_number` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `sender_id` int(11) NOT NULL,
  `receiver_id` int(11) NOT NULL,
  `action` char(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `sender_currency` char(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `amount_in_usd` decimal(20,2) NOT NULL DEFAULT 0.00,
  `amount_in_sender_currency` decimal(20,2) NOT NULL DEFAULT 0.00,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_wallet_transactions`
--

INSERT INTO `user_wallet_transactions` (`id`, `transaction_number`, `sender_id`, `receiver_id`, `action`, `sender_currency`, `amount_in_usd`, `amount_in_sender_currency`, `created_at`, `updated_at`) VALUES
(1, 'n44q5jaows92vacc', 1, 2, 'transfer', 'eur', '156.25', '150.00', '2022-05-17 02:45:01', '2022-05-17 02:45:01'),
(2, 'bxo48kc8naa3hdac', 1, 2, 'transfer', 'eur', '286.46', '275.00', '2022-05-17 02:45:12', '2022-05-17 02:45:12'),
(3, 'qxd0bz9bfsvlpsdj', 1, 2, 'transfer', 'eur', '333.33', '320.00', '2022-05-17 02:45:32', '2022-05-17 02:45:32'),
(4, 'wq5b3froqk961xxo', 2, 1, 'transfer', 'gpb', '25.00', '25.00', '2022-05-17 03:22:00', '2022-05-17 03:22:00'),
(5, 'drdqsoc0nmpdui8q', 2, 1, 'transfer', 'gpb', '32.00', '32.00', '2022-05-17 03:22:09', '2022-05-17 03:22:09'),
(6, 'tqeewqqcmapqgmxq', 2, 3, 'transfer', 'gpb', '14.00', '14.00', '2022-05-17 03:22:23', '2022-05-17 03:22:23'),
(7, '36ovib3w1wyra8p0', 2, 4, 'transfer', 'gpb', '27.00', '27.00', '2022-05-17 03:27:34', '2022-05-17 03:27:34'),
(8, 'qxtp6rz0ohhdgm2y', 2, 4, 'transfer', 'gpb', '332.00', '332.00', '2022-05-17 03:27:44', '2022-05-17 03:27:44'),
(9, 'u1mulzht2vo3q9gs', 2, 4, 'transfer', 'gpb', '22.00', '22.00', '2022-05-17 03:27:53', '2022-05-17 03:27:53'),
(10, 'a1wow0xlnck62mba', 2, 4, 'transfer', 'gpb', '27.00', '27.00', '2022-05-17 03:28:41', '2022-05-17 03:28:41'),
(11, 'jhok1zoiye7hcgrr', 3, 1, 'transfer', 'bdt', '0.73', '64.00', '2022-05-17 03:33:42', '2022-05-17 03:33:42'),
(12, 'jq3vx5zdgizilm1d', 3, 2, 'transfer', 'bdt', '1.24', '109.00', '2022-05-17 03:34:03', '2022-05-17 03:34:03'),
(13, 'etjo5ginqamd2imn', 3, 2, 'transfer', 'bdt', '28.55', '2500.00', '2022-05-17 03:34:15', '2022-05-17 03:34:15'),
(14, 'cswgmy6gp0hkh472', 3, 2, 'transfer', 'bdt', '30.83', '2700.00', '2022-05-17 03:34:44', '2022-05-17 03:34:44'),
(16, '1jtjarybnualft4b', 1, 3, 'transfer', 'eur', '2.08', '2.00', '2022-05-21 13:10:50', '2022-05-21 13:10:50'),
(17, 'if2dp4livpvcook1', 1, 4, 'transfer', 'eur', '3.13', '3.00', '2022-05-21 13:14:22', '2022-05-21 13:14:22'),
(18, 'yg3shoxsig7g7aqy', 1, 4, 'transfer', 'pkr', '1.08', '210.00', '2022-05-21 16:43:10', '2022-05-21 16:43:10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `currencies`
--
ALTER TABLE `currencies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `exchange_rates`
--
ALTER TABLE `exchange_rates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `user_wallets`
--
ALTER TABLE `user_wallets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_wallet_transactions`
--
ALTER TABLE `user_wallet_transactions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `currencies`
--
ALTER TABLE `currencies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `exchange_rates`
--
ALTER TABLE `exchange_rates`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=170;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user_wallets`
--
ALTER TABLE `user_wallets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `user_wallet_transactions`
--
ALTER TABLE `user_wallet_transactions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
