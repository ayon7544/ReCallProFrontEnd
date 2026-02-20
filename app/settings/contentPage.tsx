import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

// ─── Content Data ───────────────────────────────────────────────────────────────

type ContentTag = "about" | "privacy" | "terms";

const CONTENT: Record<
  ContentTag,
  { title: string; sections: { heading?: string; body: string }[] }
> = {
  about: {
    title: "About Us",
    sections: [
      {
        body: "Welcome to Recall — the app built to help you remember what matters most. We believe your memory is one of your greatest assets, and we're here to help you protect and strengthen it.",
      },
      {
        heading: "Our Mission",
        body: "Our mission is to empower individuals with tools that make capturing, organizing, and recalling information effortless. Whether it's a fleeting idea, an important meeting, or a cherished memory — Recall keeps it safe.",
      },
      {
        heading: "Who We Are",
        body: "We are a passionate team of engineers, designers, and thinkers who believe technology should work for people — not the other way around. Founded in 2023, Recall has grown into a trusted companion for thousands of users worldwide.",
      },
      {
        heading: "Our Values",
        body: "Transparency, privacy, and simplicity sit at the core of everything we build. We never compromise on user trust, and we are constantly iterating to deliver the best possible experience.",
      },
      {
        heading: "Get in Touch",
        body: "We'd love to hear from you. Reach us anytime at support@recall.app — whether it's feedback, a feature request, or just to say hello.",
      },
    ],
  },

  privacy: {
    title: "Privacy Policy",
    sections: [
      {
        body: "Last updated: February 20, 2026. Your privacy is critically important to us. This policy outlines how Recall collects, uses, and safeguards your personal information.",
      },
      {
        heading: "Information We Collect",
        body: "We collect information you provide directly — such as your name, email address, and content you create within the app. We also collect usage data to improve performance and your experience.",
      },
      {
        heading: "How We Use Your Data",
        body: "Your data is used solely to provide and improve our services. We do not sell, rent, or share your personal information with third parties for marketing purposes under any circumstances.",
      },
      {
        heading: "Data Storage & Security",
        body: "All data is encrypted in transit and at rest using industry-standard protocols. We store your data on secure servers and conduct regular security audits to ensure your information remains protected.",
      },
      {
        heading: "Your Rights",
        body: "You have the right to access, correct, or delete your personal data at any time. You may also request a full export of your data by contacting us at privacy@recall.app.",
      },
      {
        heading: "Cookies & Tracking",
        body: "We use minimal, essential cookies only. We do not use third-party advertising trackers. Analytics data is anonymized and aggregated.",
      },
      {
        heading: "Changes to This Policy",
        body: "We may update this policy from time to time. We will notify you of significant changes via email or an in-app notification. Continued use of the app constitutes acceptance of the updated policy.",
      },
    ],
  },

  terms: {
    title: "Terms and Conditions",
    sections: [
      {
        body: "Last updated: February 20, 2026. Please read these terms carefully before using Recall. By accessing or using our app, you agree to be bound by these terms.",
      },
      {
        heading: "1. Acceptance of Terms",
        body: "By creating an account or using any part of the Recall service, you confirm that you are at least 13 years of age and agree to these Terms and Conditions in full.",
      },
      {
        heading: "2. Use of Service",
        body: "You agree to use Recall only for lawful purposes. You must not misuse our services, attempt to gain unauthorized access, or engage in any activity that disrupts or harms the platform or other users.",
      },
      {
        heading: "3. Intellectual Property",
        body: "All content, branding, and technology within Recall are the intellectual property of Recall Inc. You may not copy, modify, distribute, or reverse-engineer any part of the service without explicit written permission.",
      },
      {
        heading: "4. User Content",
        body: "You retain ownership of all content you create within Recall. By uploading content, you grant Recall a limited license to store and display it solely for the purpose of providing the service to you.",
      },
      {
        heading: "5. Subscription & Billing",
        body: "Pro subscriptions are billed on a recurring basis. You may cancel at any time; cancellation takes effect at the end of the current billing period. Refunds are handled in accordance with the platform's (App Store / Play Store) refund policy.",
      },
      {
        heading: "6. Termination",
        body: "We reserve the right to suspend or terminate your account if you violate these terms. You may also delete your account at any time from the Profile Settings screen.",
      },
      {
        heading: "7. Limitation of Liability",
        body: "Recall is provided 'as is' without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from your use of the service.",
      },
      {
        heading: "8. Contact",
        body: "For any questions regarding these terms, please contact us at legal@recall.app.",
      },
    ],
  },
};

// ─── Content Page ───────────────────────────────────────────────────────────────

const contentPage = () => {
  const router = useRouter();
  const { tag } = useLocalSearchParams<{ tag: ContentTag }>();

  const validTag: ContentTag = tag && CONTENT[tag] ? tag : "about";
  const { title, sections } = CONTENT[validTag];

  return (
    <View style={{ flex: 1, backgroundColor: "#0F0B18" }}>
      <StatusBar barStyle="light-content" backgroundColor="#0F0B18" />

      {/* ── Top Bar ── */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 20,
          paddingTop: 56,
          paddingBottom: 16,
          position: "relative",
        }}
      >
        {/* Back button — absolute left */}
        <TouchableOpacity
          onPress={() => router.back()}
          activeOpacity={0.7}
          style={{
            position: "absolute",
            left: 20,
            top: 56,
            width: 36,
            height: 36,
            borderRadius: 18,
            backgroundColor: "#1C1728",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#E8E0F5",
              fontSize: 22,
              lineHeight: 28,
              marginTop: -2,
            }}
          >
            ‹
          </Text>
        </TouchableOpacity>

        {/* Centered title */}
        <Text
          style={{
            color: "#E8E0F5",
            fontSize: 20,
            fontWeight: "700",
            letterSpacing: 0.3,
            textAlign: "center",
          }}
        >
          {title}
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 60 }}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Content Card ── */}
        <View
          style={{
            marginHorizontal: 16,
            marginTop: 12,
            backgroundColor: "#101012",
            borderRadius: 16,
            padding: 20,
          }}
        >
          {sections.map((section, index) => (
            <View
              key={index}
              style={{ marginBottom: index < sections.length - 1 ? 20 : 0 }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 14,
                  lineHeight: 22,
                }}
              >
                {section.body}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default contentPage;
