import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Image as RNImage,
  Modal,
  FlatList,
} from "react-native";
import {
  Tag,
  Image,
  Video,
  ClipboardList,
  User,
  Clock,
  Calendar,
  X,
  Plus,
  Check,
} from "lucide-react-native";
import * as ImagePicker from "expo-image-picker";

type MediaItem = {
  uri: string;
  type: "photo" | "video";
};

const PRESET_TAGS = [
  "Haircut",
  "Beard Trim",
  "Color",
  "Fade",
  "Shave",
  "Treatment",
];

const AddNewVisitForm = () => {
  const [serviceNotes, setServiceNotes] = useState("");
  const [personalNotes, setPersonalNotes] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [customTags, setCustomTags] = useState<string[]>([]);
  const [media, setMedia] = useState<MediaItem[]>([]);

  // Custom tag modal state
  const [tagModalVisible, setTagModalVisible] = useState(false);
  const [newTagInput, setNewTagInput] = useState("");

  // ─── Tag Logic ───────────────────────────────────────────────
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const addCustomTag = () => {
    const trimmed = newTagInput.trim();
    if (!trimmed) return;
    if ([...PRESET_TAGS, ...customTags].includes(trimmed)) {
      Alert.alert("Tag already exists", `"${trimmed}" is already in the list.`);
      return;
    }
    setCustomTags((prev) => [...prev, trimmed]);
    setSelectedTags((prev) => [...prev, trimmed]); // auto-select new tag
    setNewTagInput("");
    setTagModalVisible(false);
  };

  const removeCustomTag = (tag: string) => {
    setCustomTags((prev) => prev.filter((t) => t !== tag));
    setSelectedTags((prev) => prev.filter((t) => t !== tag));
  };

  // ─── Media Logic ─────────────────────────────────────────────
  const requestPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Required",
        "Please allow access to your media library in Settings.",
        [{ text: "OK" }],
      );
      return false;
    }
    return true;
  };

  const pickPhoto = async () => {
    const granted = await requestPermission();
    if (!granted) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 0.85,
    });

    if (!result.canceled) {
      const newItems: MediaItem[] = result.assets.map((a) => ({
        uri: a.uri,
        type: "photo",
      }));
      setMedia((prev) => [...prev, ...newItems]);
    }
  };

  const pickVideo = async () => {
    const granted = await requestPermission();
    if (!granted) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsMultipleSelection: false,
      quality: 0.85,
      videoMaxDuration: 120,
    });

    if (!result.canceled) {
      const newItems: MediaItem[] = result.assets.map((a) => ({
        uri: a.uri,
        type: "video",
      }));
      setMedia((prev) => [...prev, ...newItems]);
    }
  };

  const removeMedia = (uri: string) => {
    setMedia((prev) => prev.filter((m) => m.uri !== uri));
  };

  // ─── Reusable Section Header ──────────────────────────────────
  const SectionHeader = ({
    icon: Icon,
    title,
  }: {
    icon: any;
    title: string;
  }) => (
    <View className="flex-row items-center mb-3 mt-5">
      <Icon size={18} color="#94a3b8" />
      <Text className="text-white font-semibold ml-2 text-base">{title}</Text>
    </View>
  );

  const allTags = [...PRESET_TAGS, ...customTags];

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-[#0F0D17]"
    >
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {/* ── Service Type ── */}
        <SectionHeader icon={Tag} title="Service Type" />
        <View className="flex-row flex-wrap gap-2">
          {allTags.map((tag) => {
            const isSelected = selectedTags.includes(tag);
            const isCustom = customTags.includes(tag);
            return (
              <View key={tag} className="flex-row items-center">
                <TouchableOpacity
                  onPress={() => toggleTag(tag)}
                  className={`flex-row items-center px-4 py-2 rounded-full border ${
                    isSelected
                      ? "bg-violet-600 border-violet-500"
                      : "bg-[#101012] border-[#4F4F59]"
                  }`}
                >
                  {isSelected && (
                    <Check size={13} color="#fff" style={{ marginRight: 5 }} />
                  )}
                  <Text className="text-white">{tag}</Text>
                </TouchableOpacity>
                {/* Remove button for custom tags */}
                {isCustom && (
                  <TouchableOpacity
                    onPress={() => removeCustomTag(tag)}
                    className="ml-1 bg-[#2a2a35] rounded-full p-1"
                  >
                    <X size={11} color="#94a3b8" />
                  </TouchableOpacity>
                )}
              </View>
            );
          })}

          {/* + Custom Tag button */}
          <TouchableOpacity
            onPress={() => setTagModalVisible(true)}
            className="flex-row items-center border border-dashed border-[#4F4F59] px-4 py-2 rounded-full"
          >
            <Plus size={14} color="#94a3b8" />
            <Text className="text-slate-500 ml-1">Custom Tag</Text>
          </TouchableOpacity>
        </View>

        {/* ── Media ── */}
        <SectionHeader icon={Image} title="Media" />
        <View className="flex-row flex-wrap gap-3">
          {/* Pick Photo button */}
          <TouchableOpacity
            onPress={pickPhoto}
            className="w-20 h-20 bg-[#101012] border border-[#4F4F59] rounded-xl items-center justify-center"
          >
            <Image size={24} color="#FFF" />
            <Text className="text-white text-xs mt-1">Photo</Text>
          </TouchableOpacity>

          {/* Pick Video button */}
          <TouchableOpacity
            onPress={pickVideo}
            className="w-20 h-20 bg-[#101012] border border-[#4F4F59] rounded-xl items-center justify-center"
          >
            <Video size={24} color="#FFF" />
            <Text className="text-white text-xs mt-1">Video</Text>
          </TouchableOpacity>

          {/* Selected media thumbnails */}
          {media.map((item) => (
            <View key={item.uri} className="relative">
              <RNImage
                source={{ uri: item.uri }}
                className="w-20 h-20 rounded-xl"
                resizeMode="cover"
              />
              {/* Video badge */}
              {item.type === "video" && (
                <View className="absolute bottom-1 left-1 bg-black/60 rounded px-1">
                  <Text className="text-white text-[9px]">VID</Text>
                </View>
              )}
              {/* Remove button */}
              <TouchableOpacity
                onPress={() => removeMedia(item.uri)}
                className="absolute -top-2 -right-2 bg-red-500 rounded-full p-0.5"
              >
                <X size={13} color="#fff" />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* ── Service Notes ── */}
        <SectionHeader icon={ClipboardList} title="Service Notes" />
        <TextInput
          className="bg-[#101012] border border-[#4F4F59] rounded-xl p-4 text-white h-24"
          placeholder="Formulas used, guard sizes, techniques..."
          placeholderTextColor="#4A4A5A"
          multiline
          textAlignVertical="top"
          value={serviceNotes}
          onChangeText={setServiceNotes}
        />

        {/* ── Personal Notes ── */}
        <SectionHeader icon={User} title="Personal Notes" />
        <TextInput
          className="bg-[#101012] border border-[#4F4F59] rounded-xl p-4 text-white h-24"
          placeholder="Life updates, upcoming events, hobbies..."
          placeholderTextColor="#4A4A5A"
          multiline
          textAlignVertical="top"
          value={personalNotes}
          onChangeText={setPersonalNotes}
        />

        {/* ── Duration ── */}
        <SectionHeader icon={Clock} title="Duration" />
        <TextInput
          className="bg-[#101012] border border-[#4F4F59] rounded-xl p-4 text-white"
          placeholder="0.00"
          placeholderTextColor="#4A4A5A"
          keyboardType="numeric"
        />

        {/* ── Date ── */}
        <SectionHeader icon={Calendar} title="Date" />
        <TextInput
          className="bg-[#101012] border border-[#4F4F59] rounded-xl p-4 text-white"
          placeholder="12/04/2025"
          placeholderTextColor="#4A4A5A"
        />

        {/* ── Price & Tip ── */}
        <View className="flex-row gap-4 mt-2">
          <View className="flex-1">
            <Text className="text-white font-semibold mb-2">Service Price</Text>
            <TextInput
              className="bg-[#101012] border border-[#4F4F59] rounded-xl p-4 text-white"
              placeholder="$0.00"
              placeholderTextColor="#4A4A5A"
              keyboardType="numeric"
            />
          </View>
          <View className="flex-1">
            <Text className="text-white font-semibold mb-2">Tip</Text>
            <TextInput
              className="bg-[#101012] border border-[#4F4F59] rounded-xl p-4 text-white"
              placeholder="$0.00"
              placeholderTextColor="#4A4A5A"
              keyboardType="numeric"
            />
          </View>
        </View>

        <View className="h-10" />
      </ScrollView>

      {/* ── Custom Tag Modal ── */}
      <Modal
        visible={tagModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setTagModalVisible(false)}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setTagModalVisible(false)}
          className="flex-1 bg-black/60 justify-center items-center px-6"
        >
          {/* Stop propagation so tapping inside doesn't close */}
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {}}
            className="w-full bg-[#1A1825] border border-[#4F4F59] rounded-2xl p-5"
          >
            <Text className="text-white text-lg font-semibold mb-4">
              Add Custom Tag
            </Text>

            <TextInput
              autoFocus
              className="bg-[#101012] border border-[#4F4F59] rounded-xl px-4 py-3 text-white mb-4"
              placeholder="e.g. Highlight, Toner, Perm..."
              placeholderTextColor="#4A4A5A"
              value={newTagInput}
              onChangeText={setNewTagInput}
              onSubmitEditing={addCustomTag}
              returnKeyType="done"
              maxLength={30}
            />

            <View className="flex-row gap-3">
              <TouchableOpacity
                onPress={() => {
                  setTagModalVisible(false);
                  setNewTagInput("");
                }}
                className="flex-1 border border-[#4F4F59] rounded-xl py-3 items-center"
              >
                <Text className="text-slate-400">Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={addCustomTag}
                className="flex-1 bg-violet-600 rounded-xl py-3 items-center"
              >
                <Text className="text-white font-semibold">Add Tag</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default AddNewVisitForm;
