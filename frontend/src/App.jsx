
import React from 'react'
import { Box, Button, HStack,  } from "@chakra-ui/react"
import { useColorModeValue } from './components/ui/color-mode'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import { useProductStore } from './stores/product.js';

export default function App() {
  const {products} = useProductStore()
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
      </Routes>
    </Box>
  )
}
