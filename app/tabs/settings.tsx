import React from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router"; // or useNavigation from '@react-navigation/native'
import {
  User,
  Crown,
  Lock,
  Info,
  Database,
  Calendar,
  LogOut,
  ChevronRight,
} from "lucide-react-native";

// --- Reusable MenuItem Component ---

type MenuItemProps = {
  icon: React.ElementType;
  label: string;
  onPress: () => void; // Made mandatory for better UX
  badge?: string;
  isLogout?: boolean;
  labelColor?: string;
};

export const MenuItem: React.FC<MenuItemProps> = ({
  icon: Icon,
  label,
  onPress,
  badge,
  isLogout,
  labelColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.menuItem, isLogout && styles.logoutItem]}
    >
      <View style={styles.leftSection}>
        <Icon
          size={20}
          color={isLogout ? "#EF4444" : labelColor || "#E5E7EB"}
          strokeWidth={2}
        />
        <Text
          style={[
            styles.menuLabel,
            { color: labelColor || (isLogout ? "#EF4444" : "#E5E7EB") },
          ]}
        >
          {label}
        </Text>
      </View>

      <View style={styles.rightSection}>
        {badge && (
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{badge}</Text>
          </View>
        )}
        <ChevronRight size={20} color="#6B7280" />
      </View>
    </TouchableOpacity>
  );
};

// --- Main Settings Screen ---

const Settings = () => {
  const router = useRouter();

  const handleLogout = () => {

    router.replace("/auth/login"); 
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>

          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: "https://i.pravatar.cc/150?u=nick" }}
              style={styles.avatarImage}
            />
          </View>

          <Text style={styles.userName}>Nick</Text>
          <Text style={styles.userEmail}>nick@gmail.com</Text>
        </View>

        {/* Menu Items */}
        <View style={styles.menuSection}>
          <MenuItem
            icon={User}
            label="Profile Setting"
            onPress={() => router.push("/settings/profileSetting")}
          />

          <MenuItem
            icon={Crown}
            label="Recall Pro Premium"
            badge="Upgrade"
            labelColor="#C9A367"
            onPress={() => router.push("/subscription/subscriptions")}
          />

          <MenuItem
            icon={Lock}
            label="Change password"
            onPress={() => router.push("/auth/changePassword")}
          />

          <MenuItem
            icon={Info}
            label="About Us"
            onPress={() =>
              router.push({
                pathname: "/settings/contentPage",
                params: { tag: "about" },
              })
            }
          />

          <MenuItem
            icon={Database}
            label="Privacy Policy"
            onPress={() =>
              router.push({
                pathname: "/settings/contentPage",
                params: { tag: "privacy" },
              })
            }
          />

          <MenuItem
            icon={Calendar}
            label="Terms and Conditions"
            onPress={() =>
              router.push({
                pathname: "/settings/contentPage",
                params: { tag: "terms" },
              })
            }
          />

          <View style={{ marginTop: 20 }}>
            <MenuItem
              icon={LogOut}
              label="Log Out"
              isLogout
              onPress={handleLogout}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// --- Styles (Kept identical to your last update) ---
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0B0812",
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 30,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 30,
  },
  avatarContainer: {
    width: 110,
    height: 110,
    borderRadius: 55,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#312E81",
    marginBottom: 15,
  },
  avatarImage: {
    width: "100%",
    height: "100%",
  },
  userName: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
  },
  userEmail: {
    color: "#9CA3AF",
    fontSize: 14,
    marginTop: 4,
  },
  menuSection: {
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#101012",
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#4F4F59",
  },
  logoutItem: {
    marginTop: 10,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuLabel: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 12,
  },
  badgeContainer: {
    backgroundColor: "#C9A3671A",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 10,
    borderWidth: 0.5,
    borderColor: "#C9A367",
  },
  badgeText: {
    color: "#C9A367",
    fontSize: 12,
    fontWeight: "600",
  },
});

export default Settings;
