import { Flex, Text, Input, Button, VStack } from "@chakra-ui/react"

export function Newsletter() {
    return (
        <Flex
            as="section"
            backgroundImage="bg_newsletter.jpeg"
            w="100%" height="250px"
            mt="10"
            backgroundPosition="contain"
            align="center"
            justify="space-around"
            direction="column"
        >

            <VStack spacing="6">
                <Text color="#503488" fontSize="4xl">
                    Newsletter
                </Text>
                <Input variant="flushed" w="400px" placeholder="Digite o seu e-mail" borderColor="#503488" _placeholder={{ color: '#503488' }} />
                <Button colorScheme="purple">Cadastrar</Button>
            </VStack>

        </Flex>
    )
}