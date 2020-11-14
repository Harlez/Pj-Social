import React from 'react';
import {Linking, ScrollView, Text, View } from 'react-native'
import  styles from './style'
import { RectButton } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'

function Main() {

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"></link>

    return (
      <ScrollView>
        <View style={styles.enrollment}>
            <Text style={styles.enrollmentTitle}> Venha fazer sua Matrícula </Text>
            <Text style={styles.enrollmentParagraph}>
                Nossas matrículas são feitas entrem novembro e janeiro,
                venha fazer sua matrícula ou a do seu filho nesse período! Temos os cursos de:
                Redes de Computadores, Administração e Enfermagem
            </Text>


            <RectButton onPress={Link} style={styles.button}>
                <Text style={styles.buttonText}>Venha até nós!</Text>
            </RectButton>
        </View>

        <View style={styles.contact}>
            <Text style={styles.contactTitle}>Contatos</Text>
            <Text style={styles.contactText}>Email: mmedeiros@escola.ce.gov.br</Text>
            <Text style={styles.contactText}>Numéro: (85) 3101-3155</Text>
        </View>

        <View style={styles.footer}>
            <Text>&copy; RedesTechMjm - 2020</Text>
        </View>

        <View style={styles.Icons}>
            <Icon name="instagram" size={20} color={'#004d00'}></Icon>
            <Icon name="youtube-play" size={20} color={'#004d00'}></Icon>
            <Icon name="twitter" size={20} color={'#004d00'}></Icon>
        </View>
      </ScrollView>  

    )
}

function Link() {
    Linking.openURL('https://www.google.com.br/maps/place/E.E.E.P.+Maria+José+Medeiros/@-3.7417375,-38.476105,17z/data=!3m1!4b1!4m5!3m4!1s0x7c7462e77fffeff:0xef340d2246554d5!8m2!3d-3.7417429!4d-38.4739109')
}

export default Main;