import { Flex, Image, Text, Box } from "@chakra-ui/react"

export function Infos() {
    return (
        <Flex as="section" width="100%" borderY="1px">
            <Flex width="100%" maxWidth={1200} h="100px" margin="auto" justify="space-between" py="20">

                <Flex align="center" w="250px" justify="space-between">
                    <Image src="box.png" w="60px" h="60px" />
                    <Text color="#503488" maxW={160}> Embalagem discreta e entrega rápida</Text>
                </Flex>

                <Flex align="center" w="250px" justify="space-between">
                    <Image src="card.png" w="60px" h="60px" />
                    <Box>
                        <Text color="#503488" maxW={160} display="block"> Parcelamento em 3x sem juros</Text>
                        <Text color="#503488" maxW={160} fontSize="sm"> ou até 12x no cartão</Text>
                    </Box>
                </Flex>

                <Flex align="center" w="250px" justify="space-between">
                    <Image src="ship.png" w="60px" h="60px" />
                    <Text color="#503488" maxW={160}>Frete grátis acima de R$550,00</Text>
                </Flex>

                <Flex align="center" w="200px" justify="space-between">
                    <Image src="safe.png" w="60px" h="60px" />
                    <Text color="#503488"> Compra segura</Text>
                </Flex>

            </Flex>
        </Flex>
    )
}