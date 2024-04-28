import React from 'react';
import { View, StyleSheet } from 'react-native';
import Pdf from 'react-native-pdf';
import jsPDF from 'jspdf';

export default function PdfPage({ route }) {
  const { photoUri } = route.params;
  const pdf = new jsPDF();

  // Ici vous convertiriez l'image en PDF. Ce code doit être ajusté pour exécuter sur un serveur ou utiliser une fonctionnalité compatible
  // pdf.addImage(photoUri, 'JPEG', 15, 40, 180, 160);
  // const pdfUri = pdf.output('bloburi');

  return (
    <View style={styles.container}>
      <Pdf source={{ uri: pdfUri }} style={styles.pdf} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pdf: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});