import { Flex, Box, Text, Image, VStack, HStack } from '@chakra-ui/react'

export function Footer() {
    return (
        <Flex as="footer" w="100%" h="250px" m="auto" align="center" justify="space-between" bg="#503488">
            <Flex maxW={1200} m="auto" align="center">
                <Image src="footer_ludix.png" w="185" h="85" />
                <Flex color="white" ml="16" >

                    <HStack spacing="16" align="start">
                        <Box >
                            <Text mb="4" fontWeight="bold" fontSize="lg">SOBRE</Text>
                            <VStack align="left">
                                <Text>Sobre nós</Text>
                                <Text>Blog</Text>
                                <Text>Materiais Gratuitos</Text>
                                <Text>Contato</Text>
                                <Text>Política de privacidade</Text>
                            </VStack>
                        </Box>

                        <Box >
                            <Text mb="4" fontWeight="bold" fontSize="lg">PRODUTOS</Text>
                            <VStack align="left">
                                <Text>Livros</Text>
                                <Text>Vibradores</Text>
                            </VStack>
                        </Box>

                        <Box >
                            <Text mb="4" fontWeight="bold" fontSize="lg">REDES SOCIAIS</Text>
                            <VStack align="left">
                                <Text>Instagram</Text>
                                <Text>TikTok</Text>
                                <Text>Facebook</Text>
                                <Text>YouTube</Text>
                                <Text>Pinterest</Text>
                            </VStack>
                        </Box>

                        <Box >
                            <Text mb="4" fontWeight="bold" fontSize="lg">AJUDA</Text>
                            <VStack align="left">
                                <Text>Minha Conta</Text>
                                <Text>Rastrear Pedido</Text>
                                <Text>Trocas e Devoluçoes</Text>
                                <Text>Termos de Uso</Text>
                                <Text>FAQ</Text>
                            </VStack>
                        </Box>

                    </HStack>
                </Flex>
            </Flex>
        </Flex>
    )
}