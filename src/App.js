import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  List, ListItem, ListIcon, OrderedList, UnorderedList
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {
  const [task, setTask] = useState("");

  function handleChangeInput(event) {
    const inputTask = event.target.value;

    setTask(inputTask);
  }

  const [itemsList, setItemsList] = useState([]);

  function handleAddItemToList(event) {
    event.preventDefault();

    if (task) {
      setItemsList([...itemsList, task])

      setTask("")
    }
  }

  function getPostAndDelete() {
    itemsList.splice(task.indexOf(), 1)
    setItemsList(itemsList) 

    
  }
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <Box className="todo-wrapper">
            <Heading fontSize="40px" >
              Lista de Afazeres
            </Heading>
            <FormControl id="text">
              <FormLabel textAlign="center">Me diz o que tu quer fazer Jovem</FormLabel>
              <Input type="text" onChange={handleChangeInput} value={task} />
              <FormHelperText>É PRA TERMINAR TUDO VIU?</FormHelperText>
            </FormControl>
            <Button
              mt={4}
              colorScheme="teal"
              type="submit"
              onClick={handleAddItemToList}
            >
              FAZER
            </Button>

            <UnorderedList pr="1em" pt="2" listStyleType="none" >
              {itemsList.map(item => (
                <ListItem pt="10px" pb="10px">
                  <Box pt="10px" pb="10px" rounded="0.5em" backgroundColor="teal" >
                    <Text color="white" alignSelf="center" justifySelf="center">
                      {item}
                    </Text>
                    <Button colorScheme="pink" variant="solid" float="right" onClick={getPostAndDelete}>
                        Excluir
                    </Button>
                  </Box>
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
