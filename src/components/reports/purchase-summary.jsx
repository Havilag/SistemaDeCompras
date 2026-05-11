import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    page: {
        padding: 40,
        fontSize: 12,
        fontFamily: 'Helvetica',
    },
    header: {
        marginBottom: 20,
        borderBottomWidth: 1, 
        borderBottomColor: '#e5e7eb',
        paddingBottom: 10,
    },
    brand: {
        fontSize: 24,
        color: '#6366f1',
        fontWeight: 'bold',
    },
    Title: {
        marginTop: 20,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: '#f3f4f6',
        padding: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomWidth: 0.5,
        borderBottomColor: '#e5e7eb',
    },
    total: {
        marginTop: 30,
        textAlign: 'right',
        fontSize: 18,
        color: '#111827',
    }
});


export const PurchaseSummary = ({ products, total, userName }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <Text style={styles.brand}>AURA</Text>
                <Text>Purchase Summary</Text>
                <Text>User: {userName}</Text>
            </View>

            <Text style={styles.Title}>Order Details</Text>
            {
                products.map((ProductData) => (
                    <View key={ProductData.id} style={styles.row}>
                        <Text style={{ width: '60%' }}>{ProductData.title}</Text>
                        <Text style={{ width: '20%' }}>x{ProductData.quantity}</Text>
                        <Text style={{ width: '20%', textAlign: 'right' }}>
                            ${(ProductData.price * ProductData.quantity).toFixed(2)}
                        </Text>
                    </View>
                ))
            }
            <Text style={styles.total}>Total Pagado: ${total.toFixed(2)}</Text>
        </Page>
    </Document>
)
