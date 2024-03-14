import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Product } from "../products";
// import { Product } from "../../models/product";

export default function ProductCard(props: Product & { key: number }) {
  const { image, name, description, price } = props;
  return (
    <Flex
      direction="column"
      display="flex"
      align="center"
      mt="10"
      mb="10"
      gap={20}
    >
      <Card maxW="sm">
        <CardBody>
          <Image src={image} alt={name} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{name}</Heading>
            <Text>{description}</Text>
            <Text color="blue.600" fontSize="2xl">
              {price} €
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </Flex>
  );
}
