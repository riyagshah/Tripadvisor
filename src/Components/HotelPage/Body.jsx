import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  Spacer,
  ListItem,
  UnorderedList,
  Box,
  Stack,
  Flex,
  Checkbox,
  Image,
  Button,
} from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
// import styles from "./Body.module.css";
import styled from "styled-components";
import "./Body.module.css";
import {
  getHotelsRequest,
  getHotelsSuccess,
  getHotelsFailure,
} from "../../Redux/AppReducer/action";

const Subheading = styled.h6`
  font-size: 18px;
  font-weight: 20px;
  padding: 10px;
`;

const Body = () => {
  const dispatch = useDispatch();
  const hotelsData = useSelector((store) => console.log(store.app.hotels));

  const gethotels = () => {
    dispatch(getHotelsRequest());
    axios
      .get("./hotels")
      .then((r) => dispatch(getHotelsSuccess(r.data)))
      .catch((e) => dispatch(getHotelsFailure(e)));
  };

  useEffect(() => {
    if (hotelsData?.length === 0) {
      dispatch(gethotels());
    }
  }, []);

  return (
    <Flex pl="150px" pr="150px">
      {/* filters and sorting */}
      <Stack w="25%" pt="10px" mt="0px">
        <Box bg="blue.100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
            width="100%"
            height="100%"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </Box>
        <Box bg="blue.100">
          <Subheading>Deals</Subheading>
          <UnorderedList>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Free cancellation{" "}
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Reserve now, pay at stay{" "}
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Properties with special offers{" "}
              </Checkbox>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box bg="blue.100">
          <Subheading>Property types</Subheading>
          <UnorderedList>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Hotels 530
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Guest Houses 453
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Resorts 234
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Speciality lodgings 104
              </Checkbox>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box bg="blue.100">
          <Subheading>Popular</Subheading>
          <UnorderedList>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Breakfast included 514
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                {"&"} up 829
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                5 stars 23
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                4 stars 65
              </Checkbox>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box bg="blue.100">
          <Subheading> Amenities</Subheading>
          <UnorderedList>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Free Wifi 704
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Breakfast included 514
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Pool 544
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Free parking 821
              </Checkbox>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box bg="blue.100">
          <Subheading>Distance from</Subheading>
          {/* <UnorderedList>
              <ListItem>
                <Checkbox size="md" colorScheme="green">
                  {" "}
                  Old Goa{" "}
                </Checkbox>
              </ListItem>
              <ListItem>
                <Checkbox size="md" colorScheme="green">
                  {" "}
                  Bascilica of Bab Jesus {" "}
                </Checkbox>
              </ListItem>
              <ListItem>
                <Checkbox size="md" colorScheme="green">
                  {" "}
                  Tomb of ST. Francis Xavier {" "}
                </Checkbox>
              </ListItem>
              <ListItem>
                <Checkbox size="md" colorScheme="green">
                  {" "}
                  Church of Our Lady of the Immaticulate Conception {" "}
                </Checkbox>
              </ListItem>
            </UnorderedList> */}
          <RadioGroup pl="10px" pb="8px">
            <Stack direction="column">
              <Radio value="1">Old Goa</Radio>
              <Radio value="2">Bascilica of Bab Jesus</Radio>
              <Radio value="3"> Tomb of ST. Francis Xavier</Radio>
              <Radio value="4">
                {" "}
                Church of Our Lady of the Immaticulate Conception
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>
        <Box bg="blue.100">
          <Subheading> Hotel class</Subheading>
          <UnorderedList>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                5 stars 23
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                4 stars 65
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                3 stars 335
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                2 stars 184
              </Checkbox>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box bg="blue.100">
          <Subheading>Style</Subheading>
          <UnorderedList>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Budget 370
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Mid-range 437
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Luxury 51
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Family-friendly 499
              </Checkbox>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box bg="blue.100">
          <Subheading>Brands</Subheading>
          <UnorderedList>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                OYO 112
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Treebo 21
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                FabHotels 15
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Radisson 5
              </Checkbox>
            </ListItem>
          </UnorderedList>
        </Box>
      </Stack>
      {/* hotels list */}
      <Stack w="75%" mt="0px" p="12px">
        <Box bg="pink.100" h="280px" w="100">
          <Flex>
            <Image
              mh="280px"
              boxSize="280px"
              src="https://bit.ly/dan-abramov"
              alt="hotels"
            />
            <Box p="50px">
              <Subheading>heading</Subheading>
              <Spacer />
              <Subheading m="50%">Price</Subheading>
              <Button>View Deal</Button>
            </Box>
          </Flex>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Body;
