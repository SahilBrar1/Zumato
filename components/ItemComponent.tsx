import React from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "./AppButton";
// import { useMutation } from '@tanstack/react-query';
import { useState } from "react";
// import {useQueryClient} from '@tanstack/react-query';

type ItemProps = { name: string; id?: number };

const Itemcomponent = ({ name }: ItemProps) => {
  // const queryClient = useQueryClient();

  let [color, setColor] = useState("#f8a530");
  //useMutation
  // const mutation = useMutation({
  //   mutationFn: updateData,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({queryKey: ['posts']});
  //   },
  // });
  //useMutation
  return (
    <View style={styles.screenContainer}>
      <AppButton
        name={name}
        onPress={() => setColor("#30f861")}
        // onPress={() => mutation.mutate({  id: 5,
        //   name: 'Do the laundry'})}
        color={color}
      />
    </View>
  );
};
export default Itemcomponent;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
});
