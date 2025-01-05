import React from 'react';
import { Badge, MD3Colors } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Colors } from 'constants/colors';

const StatusBadges = ({ status }: { status?: string }) => {
  const getStatusStyle = () => {
    switch (status) {
      case 'present':
        return styles.present;
      case 'absent':
        return styles.absent;
      case 'late':
        return styles.late;
      case 'sick':
        return styles.sick;
      default:
        return styles.unknown;
    }
  };

  const getStatusLabel = () => {
    switch (status) {
      case 'present':
        return 'Present';
      case 'absent':
        return 'Absent';
      case 'late':
        return 'Late';
      case 'sick':
        return 'Sick';
      default:
        return 'Unknown';
    }
  };

  return <Badge style={[styles.badge, getStatusStyle()]}>{getStatusLabel()}</Badge>;
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 8,
  },
  present: {
    backgroundColor: Colors.primary,
    color: Colors.white,
  },
  absent: {
    backgroundColor: MD3Colors.error50,
    color: Colors.white,
  },
  late: {
    backgroundColor: Colors.secondary,
    color: Colors.text,
  },
  sick: {
    backgroundColor: Colors.disabled,
    color: Colors.text,
  },
  unknown: {
    backgroundColor: Colors.tertiary,
    color: Colors.white,
  },
});

export default StatusBadges;
