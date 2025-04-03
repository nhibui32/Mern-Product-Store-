import { Container, Box, VStack, Heading, Input, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useColorModeValue } from '../components/ui/color-mode'
import { useProductStore } from '../stores/product.js'
export default function CreatePage() {
    const[newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
    })
    const {createProduct} = useProductStore()
    const handleAddProduct = async () =>{
       const {success, message} = await createProduct(newProduct)
       console.log("Success: ", success);
       console.log("Message: ", message);
    }
  return (
    <Container maxW={"container.md"}>
        <VStack spacing={14}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8} m={4}>
                Create New Product
            </Heading>

            <Box
                w={"full"} bg={useColorModeValue("white", "gray.800")}
                p={4} rounded={"lg"} shadow={"md"} m={4}
            >
                <VStack spacing={4}>
                    <Input placeholder="Product Name"
                    name="name"
                    type='text'
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                    />

                    <Input placeholder="Product Price"
                    name="price"
                    type='number'
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                    />

                    <Input placeholder="Product Image"
                    name="image"
                    
                    value={newProduct.image}
                    onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                    />

                    <Button bg={useColorModeValue("blue.400", "blue.400")} onClick={handleAddProduct} w='full'>
                        Add the Product
                    </Button>
                </VStack>

            </Box>
        </VStack>
    </Container>

  )
}
