import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useState } from "react";
import { Pressable, TextInput, StyleSheet, useColorScheme } from "react-native";
import { router } from "expo-router";

type Errors = {
    fullName?: string;
    phone?: string;
    email?: string;
}

export default function Register(){
    const colorScheme = useColorScheme(); // "light" | "dark" | null
    const isDark = colorScheme === "dark";

    // Theme-aware colors (simple and reliable)
    const colors = {
        text: isDark ? "#ffffff" : "#111111",
        placeholder: isDark ? "#9a9a9a" : "#6b6b6b",
        border: isDark ? "#3a3a3a" : "#d0d0d0",
        inputBg: isDark ? "#1f1f1f" : "#ffffff",
        buttonBg: isDark ? "#1f1f1f" : "#ffffff",
    };


    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const [errors, setErrors] = useState<Errors>({});

    const validate = (): boolean =>{
        const nextErrors: Errors = {};

        if (name.trim().length === 0) nextErrors.fullName = "Full name is required.";
        if (phone.trim().length === 0) nextErrors.phone = "Phone is required.";
        if (email.trim().length === 0) nextErrors.email = "Email is required.";

        setErrors(nextErrors);

        return Object.keys(nextErrors).length === 0;
    }

    const handleSubmit = () =>{
        const ok = validate();
        if (!ok) return;

        const token = `QR_TEST_${Date.now()}`;

        router.push({
            pathname: "/my-qr",
            params: { token },
        });
    }

    
    return (
        <ThemedView style={styles.container}>
            <ThemedText type="title">Register</ThemedText>

            <ThemedView style={styles.field}>
                <ThemedText type="subtitle">Name:</ThemedText>
                <TextInput 
                    value={name}
                    onChangeText={setName}
                    placeholder="Jane Doe"
                    placeholderTextColor={colors.placeholder}
                    style={[styles.input, { color: colors.text, borderColor: colors.border, backgroundColor: colors.inputBg }]}
                />
                {errors.fullName && (<ThemedText style={styles.error}>{errors.fullName}</ThemedText>)}
            </ThemedView>

            <ThemedView style={styles.field}>
                <ThemedText type="subtitle">Phone Number:</ThemedText>
                <TextInput 
                    value={phone}
                    onChangeText={setPhone}
                    placeholder="(555) 123-4567"
                    keyboardType="phone-pad"
                    placeholderTextColor={colors.placeholder}
                    style={[styles.input, { color: colors.text, borderColor: colors.border, backgroundColor: colors.inputBg }]}

                />
                {errors.phone && (<ThemedText style={styles.error}>{errors.phone}</ThemedText>)}
            </ThemedView>

            <ThemedView style={styles.field}>
                <ThemedText type="subtitle">Email:</ThemedText>
                <TextInput 
                    value={email}
                    onChangeText={setEmail}
                    placeholder="jane@drexel.edu" 
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholderTextColor={colors.placeholder}
                    style={[styles.input, { color: colors.text, borderColor: colors.border, backgroundColor: colors.inputBg }]}
                />
                {errors.email && (<ThemedText style={styles.error}>{errors.email}</ThemedText>)}
            </ThemedView>

            <Pressable onPress={handleSubmit} style={[styles.button, { borderColor: colors.border, backgroundColor: colors.buttonBg }]}>
                <ThemedText type="subtitle">
                    Submit
                </ThemedText>
            </Pressable>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 14,
    flex: 1,
  },
  field: {
    gap: 6,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: "100%",
  },
  error: {
    color: "#fd6060ff",
    fontSize: 12,
    opacity: 0.9,
  },
  button: {
    marginTop: 8,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 12,
    alignSelf: "flex-start",
  },
});
