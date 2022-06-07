import { Box, VStack, ScaleFade, Button, useDisclosure, Image, Text } from "@chakra-ui/react";

export function ProductItem(props) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box onMouseEnter={onOpen} onMouseLeave={onClose} align="left">
            <VStack align="left" spacing="2">
                <Image src={props.product.image} width="250px" height="312px" />
                <Text fontSize="12">{props.product.category}</Text>
                <Text>{props.product.name}</Text>
                <Text color="#503488">{props.product.formattedPrice}</Text>
                <ScaleFade initialScale={0.9} in={isOpen}>
                    <Button width="100%" colorScheme="purple">Comprar</Button>
                </ScaleFade>
            </VStack>
        </Box>

    )
}