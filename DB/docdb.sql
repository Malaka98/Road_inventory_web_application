-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 21, 2021 at 07:38 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `uname` varchar(20) NOT NULL,
  `pass` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `uname`, `pass`) VALUES
(1, 'admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `document`
--

CREATE TABLE `document` (
  `ID` varchar(50) NOT NULL,
  `data1` varchar(20) NOT NULL,
  `data2` varchar(20) NOT NULL,
  `data3` varchar(20) NOT NULL,
  `data4` varchar(20) NOT NULL,
  `data5` varchar(20) NOT NULL,
  `data6` varchar(20) NOT NULL,
  `data7` varchar(20) NOT NULL,
  `data8` varchar(20) NOT NULL,
  `data9` varchar(20) NOT NULL,
  `data10` varchar(20) NOT NULL,
  `data11` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `doc_img`
--

CREATE TABLE `doc_img` (
  `id` int(20) NOT NULL,
  `img_id` varchar(50) NOT NULL,
  `d_id` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `table1`
--

CREATE TABLE `table1` (
  `t1_id` int(11) NOT NULL,
  `T1data1` varchar(50) NOT NULL,
  `T1data2` varchar(50) NOT NULL,
  `T1data3` varchar(50) NOT NULL,
  `T1data4` varchar(50) NOT NULL,
  `T1data5` varchar(50) NOT NULL,
  `T1data6` varchar(50) NOT NULL,
  `T1data7` varchar(50) NOT NULL,
  `T1data8` varchar(50) NOT NULL,
  `T1data9` varchar(50) NOT NULL,
  `T1data10` varchar(50) NOT NULL,
  `T1data11` varchar(50) NOT NULL,
  `d_id` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `table3`
--

CREATE TABLE `table3` (
  `t2_id` int(11) NOT NULL,
  `T2data1` varchar(50) NOT NULL,
  `T2data2` varchar(50) NOT NULL,
  `T2data3` varchar(200) NOT NULL,
  `d_id` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `document`
--
ALTER TABLE `document`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `doc_img`
--
ALTER TABLE `doc_img`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `d_id` (`d_id`);

--
-- Indexes for table `table1`
--
ALTER TABLE `table1`
  ADD PRIMARY KEY (`t1_id`),
  ADD KEY `d_id` (`d_id`);

--
-- Indexes for table `table3`
--
ALTER TABLE `table3`
  ADD PRIMARY KEY (`t2_id`),
  ADD KEY `d_id` (`d_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `doc_img`
--
ALTER TABLE `doc_img`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `table1`
--
ALTER TABLE `table1`
  MODIFY `t1_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT for table `table3`
--
ALTER TABLE `table3`
  MODIFY `t2_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `doc_img`
--
ALTER TABLE `doc_img`
  ADD CONSTRAINT `doc_img_ibfk_1` FOREIGN KEY (`d_id`) REFERENCES `document` (`ID`);

--
-- Constraints for table `table1`
--
ALTER TABLE `table1`
  ADD CONSTRAINT `table1_ibfk_1` FOREIGN KEY (`d_id`) REFERENCES `document` (`ID`);

--
-- Constraints for table `table3`
--
ALTER TABLE `table3`
  ADD CONSTRAINT `table3_ibfk_1` FOREIGN KEY (`d_id`) REFERENCES `document` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
