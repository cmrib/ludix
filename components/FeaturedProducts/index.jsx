import { Box, Text, Flex } from "@chakra-ui/react";
import { ProductItem } from "../ProductItem";

const products = [{
    category: 'VIBRADORES',
    name: 'BEE My Love',
    formattedPrice: 'R$289.90',
    image: 'bee.jpeg'
},
{
    category: 'VIBRADORES',
    name: 'MAGIX',
    formattedPrice: 'R$369.90',
    image: 'magix.jpeg',
},
{
    category: 'VIBRADORES',
    name: 'LE CLIT',
    formattedPrice: 'R$499.90',
    image: 'leclit.jpeg'
},
{
    category: 'VIBRADORES',
    name: 'GIGIX',
    formattedPrice: 'R$519.90',
    image: 'gigix.jpeg'
}]

export function FeaturedProducts() {

    return (
        <Box width="100%" maxWidth={1200} m="auto" align="center" >
            <Text fontSize="4xl" color="#503488" my="8">Produtos em destaque</Text>
            <Flex justify="space-between">

                {products.map(product => {
                    return <ProductItem product={product} key={product.name} />
                })}

            </Flex>
        </Box>
    )
}