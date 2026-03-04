import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#cccccc75'
  },
  scrollContent: { 
    padding: 24, 
    paddingTop: Platform.OS === 'ios' ? 70 : 40 
  },
  header: { 
    marginBottom: 30 
  },
  title: { 
    fontSize: 30, 
    fontWeight: '900', 
    color: '#1E3A8A', 
    letterSpacing: -1
  },
  accentBar: {
    height: 5,
    width: 50,
    backgroundColor: '#FB923C',
    marginTop: 8,
    borderRadius: 10
  },
  formContainer: { 
    marginTop: 10 
  },
  inputGroup: { 
    marginBottom: 18 
  },
  label: { 
    color:'#64748b', 
    fontSize: 11, 
    fontWeight: '800', 
    marginBottom: 8, 
    letterSpacing: 1 
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 15,
    height: 60,
    borderWidth: 1.5,
    borderColor: 'transparent', 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  inputFocused: {
    borderColor: '#1E3A8A', 
    backgroundColor: '#FFFFFF',
  },
  input: { 
    flex: 1, 
    color: '#1E3A8A', 
    fontSize: 16, 
    marginLeft: 12, 
    fontWeight: '600' 
  },
  row: { 
    flexDirection: 'row', 
    justifyContent: 'space-between' 
  },
  mainButton: { 
    backgroundColor: '#1E3A8A',
    height: 60, 
    borderRadius: 20, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    shadowColor:'#1E3A8A',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  buttonText: { 
    color: '#FFFFFF', 
    fontSize: 17, 
    fontWeight: '900', 
    letterSpacing: 1,
    marginRight: 10
  },
});