import { Box, Text, Flex, Image } from "@chakra-ui/react"

export function Blog() {
    return (
        <Box as="section" width="100%" mt="8" maxW={1200} m="auto" align="center" color="#503488">
            <Text fontSize="4xl" mb="6">Blog</Text>
            <Flex>
                <Box maxW={375} align="left">
                    <Image src="choice.jpeg" />
                    <Text fontSize="20px" my="4">Como escolher o vibrador ideal?</Text>
                    <Text fontSize="14px">Vibradores são excelentes aliados do prazer. Vem descobrir como escolher o modelo perfeito para você.</Text>
                </Box>
                <Box maxW={375} align="left" ml="14">
                    <Image src="girls.jpeg" />
                    <Text fontSize="20px" my="4">Como escolher o vibrador ideal?</Text>
                    <Text fontSize="14px">Mias de 70% das mulheres possuem uma queixa sexual. E se eu te contar que isso tem menos a ver com biologia e mais com elementos sociais?</Text>
                </Box>
            </Flex>
        </Box >
    )
}