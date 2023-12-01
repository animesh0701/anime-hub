import {
  Card,
  Image,
  CardBody,
  HStack,
  Text,
  Box,
  Container,
} from "@chakra-ui/react";
import { episode, ITitle } from "../user-services/consumet-anime";
import { StarIcon } from "@chakra-ui/icons";

interface Props {
  anime: episode;
}

const AnimeCard = ({ anime }: Props) => {
  const title = (anime.title as ITitle).english; //overiding type inference
  const rating = ((anime.rating as number) / 10).toFixed(1);
  return (
    <Card borderRadius={10}>
      <Box h={[56, 80, 80, 80]}>
        <Box
          backgroundImage={anime.image}
          borderRadius={10}
          borderBottomRadius={0}
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          h={[56, 80, 80, 80]}
        />
        <HStack
          position={"absolute"}
          backgroundColor={"black"}
          top={0}
          right={0}
          opacity={0.9}
          zIndex={1}
          p={1}
          pl={2}
          pr={2}
          borderRadius={10}
          m={2}
        >
          <StarIcon color={"gold"} />
          <Text color={"white"} fontSize={["sm", "md", "lg"]}>
            {rating}
          </Text>
        </HStack>
        <HStack
          position={"absolute"}
          bottom={"75"}
          right={0}
          zIndex={1}
          p={1}
          pl={2}
          pr={2}
          borderRadius={10}
          m={2}
        >
          <Text color={"white"} fontSize={["sm", "md", "lg"]}>
            {anime.totalEpisodes} Episodes
          </Text>
        </HStack>
        <Box
          position="absolute"
          borderTopRadius={10}
          top={0}
          left={0}
          w="100%"
          h={[56, 80, 80, 80]}
          opacity={1}
          bgGradient="linear( #f5289100 60% , #000000cc )"
          bgBlendMode="multiply"
        />
      </Box>

      <CardBody bg="#344064" borderRadius={10} borderTopRadius={0} p={3}>
        <HStack justifyContent={"space-between"} alignItems={"flex-start"}>
          <Text fontSize={["sm", "md", "lg"]} color={"white"}>
            {title}
          </Text>
          <Text fontSize={["xs", "xs", "sm"]} color={"white"} pl={5} pt={1}>
            {anime.releaseDate}
          </Text>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default AnimeCard;
