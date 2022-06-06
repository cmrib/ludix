import { Flex, Text, Image, Box, Input, Button, IconButton, HStack, background } from "@chakra-ui/react";
import { FiUser } from 'react-icons/fi'

export function Header() {
    return (

        <Flex as="header" w="100%" color="white" direction="column" bg="tomato" align="center">

            <Flex py="2" bg="#57308b" width="100%" justify="center">
                <Text fontSize="sm" >EMBALAGEM DISCRETA E ENTREGA RÁPIDA</Text>
            </Flex>

            <Box bg="white" w="100%" align="center" justify="space-between" py="12">
                <Flex maxWidth={1200} justify="space-between" align="center" >

                    <Flex align="center" borderBottom="2px" borderColor="#57308b" h="40px" w="220px">
                        <Input variant="unstyled" placeholder="Procurar produtos..." color="#57308b" />
                        <Button variant="link" color="#57308b">Buscar</Button>
                    </Flex>

                    <Image
                        marginLeft="-14"
                        src="https://ludixportal.com.br/wp-content/uploads/2022/05/logo_ludix_header.png"
                    />

                    <Flex>
                        <HStack spacing="16px">
                            <IconButton
                                colorScheme='purple'
                                aria-label='Search database'
                                borderRadius="50%"
                                icon={<FiUser />}
                            />
                            <IconButton
                                colorScheme='purple'
                                aria-label='Search database'
                                borderRadius="50%"
                                icon={<FiUser />}
                            />
                            <IconButton
                                colorScheme='purple'
                                aria-label='Search database'
                                borderRadius="50%"
                                icon={<FiUser />}
                            />
                        </HStack>
                    </Flex>
                </Flex>
            </Box >

            <Flex py="1" bg="#57308b" width="100%" justify="center">

                <HStack spacing="24px">

                    <Button fontSize="sm" variant="ghost" _hover={{ color: "purple", background: "white" }}
                    > Home</Button>
                    <Button fontSize="sm" variant="ghost" _hover={{ color: "purple", background: "white" }}
                    >Sobre nós</Button>
                    <Button fontSize="sm" variant="ghost" _hover={{ color: "purple", background: "white" }}
                    >Produtos</Button>
                    <Button fontSize="sm" variant="ghost" _hover={{ color: "purple", background: "white" }}
                    >Blog</Button>
                    <Button fontSize="sm" variant="ghost" _hover={{ color: "purple", background: "white" }}
                    >Contos eróticos</Button>
                    <Button fontSize="sm" variant="ghost" _hover={{ color: "purple", background: "white" }}
                    >Materiais Gratuitos</Button>
                    <Button fontSize="sm" variant="ghost" _hover={{ color: "purple", background: "white" }}
                    >Contato</Button>

                </HStack>
            </Flex>

        </Flex >
    )
}