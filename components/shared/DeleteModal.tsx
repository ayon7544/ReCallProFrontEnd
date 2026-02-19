import React from "react";
import { View, Text, TouchableOpacity, Modal, Pressable } from "react-native";
import { AlertTriangle } from "lucide-react-native";

interface DeleteModalProps {
  isVisible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  cancelText?: string;
  confirmText?: string;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  isVisible,
  onClose,
  onConfirm,
  title,
  description,
  cancelText = "Cancel",
  confirmText = "Delete",
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      {/* Dimmed Backdrop */}
      <Pressable
        className="flex-1 bg-black/70 items-center justify-center px-6"
        onPress={onClose}
      >
        {/* Modal Card */}
        <Pressable
          className="w-full bg-[#101012] border border-zinc-800/50 rounded-3xl p-8 items-center"
          onPress={(e) => e.stopPropagation()}
        >
          {/* Warning Icon with red glow effect */}
          <View className="w-16 h-16  rounded-full items-center justify-center mb-6">
            <AlertTriangle size={32} color="#ef4444" />
          </View>

          {/* Dynamic Content */}
          <Text className="text-white text-2xl font-bold mb-3 text-center">
            {title}
          </Text>
          <Text className="text-zinc-400 text-center leading-6 mb-8 text-[15px]">
            {description}
          </Text>

          {/* Action Row */}
          <View className="flex-row gap-x-3 w-full" style={{gap:"5%"}}>
            <TouchableOpacity
              onPress={onClose}
              activeOpacity={0.7}
              className="flex-1 bg-zinc-700/50 py-4 rounded-3xl items-center"
              style={{ backgroundColor: "#4F4F59" }}
            >
              <Text className="text-white font-semibold text-lg">
                {cancelText}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onConfirm}
              activeOpacity={0.7}
              className="flex-1 bg-red-600 py-4 rounded-3xl items-center"
              style={{ backgroundColor: "#E7000B" }}
            >
              <Text className="text-white font-semibold text-lg">
                {confirmText}
              </Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default DeleteModal;
