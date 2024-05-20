import { SafeAreaView } from "react-native";
import { useState, useCallback, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { GooglePlacesAutocomplete, GooglePlacesAutocompleteRef } from 'react-native-google-places-autocomplete';
import { GOOGLE_CONFIG } from "../../../app-config";
import { HandleContinueBtn } from "../../../hooks/BookingContinueBtnHooks";

type Props = {
  onChange: ({ }: { key: string, value: any }) => void;
  stepKey: string;
};
const AddressInput = ({ onChange, stepKey }: Props) => {
  const { enableBtn } = HandleContinueBtn();
  let inputRef: GooglePlacesAutocompleteRef | null = null;

  useEffect(() => {
    inputRef?.setAddressText('');
  }, [stepKey]);

  const handleAddressChange = (newAddress: any) => {
    onChange(newAddress);
    enableBtn();
  };

  return (
    <SafeAreaView>
      <GooglePlacesAutocomplete
        ref={ref => {
          inputRef = ref
        }}
        disableScroll={true}
        fetchDetails={true}
        placeholder="Entrez une adresse"
        query={{ key: GOOGLE_CONFIG.apiKey }}
        onPress={(data, details = null) => {
          handleAddressChange(details?.formatted_address);
        }}
      />
    </SafeAreaView>
  );
};

export default AddressInput;
