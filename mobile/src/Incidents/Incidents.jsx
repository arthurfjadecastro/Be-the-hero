import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import logoImg from "../assets/logo.png";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import useIncidents from "./useIncidents";

import styles from "./styles";

const Incidents = () => {
  const navigation = useNavigation();

  const [incidents, error, total, page, loading] = useIncidents();

  const navigateToDetail = incident => {
    navigation.navigate("Details", { incident });
  };

  const handleFoo = () => {
    // const [incidents, error, total, page, loading] = useIncidents();
    // console.log("METHOD");
    // console.log(incidents);
    // console.log(total);
    // console.log(loading);
    // console.log(page);
  };

  if (incidents !== null) {
    // console.log("cabecalho");
    // console.log(incidents);
    // console.log(total);
    // console.log(loading);
    // console.log(page);
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={logoImg} alt="headerLogo" />
          <Text style={styles.headerText}>
            Total de <Text style={styles.headerTextBold}>{total} casos</Text>
          </Text>
        </View>
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.description}>
          Faça uma leitura e tenha uma reflexão
        </Text>
        <FlatList
          data={incidents}
          // onEndReached={handleFoo}
          // onEndReachedThreshold={0.2}
          showsVerticalScrollIndicator={false}
          keyExtractor={incident => String(incident.id)}
          style={styles.incidentList}
          renderItem={({ item: incident }) => (
            <View style={styles.incident}>
              <Text style={styles.incidentProperty}>ONG:</Text>
              <Text style={styles.incidentValue}>{incident.name}</Text>
              <Text style={styles.incidentProperty}>Caso:</Text>
              <Text style={styles.incidentValue}>{incident.title}</Text>
              <Text style={styles.incidentProperty}>Valor:</Text>
              <Text style={styles.incidentValue}>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                }).format(500)}
              </Text>

              <TouchableOpacity
                style={styles.detailsButton}
                onPress={() => navigateToDetail(incident)}
              >
                <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                <Feather name="arrow-right" size={16} color="#E02041" />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </>
  );
};

export default Incidents;
