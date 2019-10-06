import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { languageSelectStyles } from './styles';

interface LanguageSelectProps {
    value: string;
    handleChange: any;
}

const LanguageSelect:React.FunctionComponent<LanguageSelectProps> = ({ value, handleChange }) => {
    const classes = languageSelectStyles();
    return (
        <FormControl className={classes.select}>
        <InputLabel htmlFor="language">First Language</InputLabel>
            <Select
            value={value}
            onChange={handleChange('language')}
            inputProps={{
                name: 'Langage',
                id: 'language',
            }}
            >
                <MenuItem value=""></MenuItem>
                <MenuItem value="Abkhazian">Abkhazian</MenuItem>
                <MenuItem value="Afar">Afar</MenuItem>
                <MenuItem value="Afrikaans">Afrikaans</MenuItem>
                <MenuItem value="Albanian">Albanian</MenuItem>
                <MenuItem value="Amharic">Amharic</MenuItem>
                <MenuItem value="Arabic">Arabic</MenuItem>
                <MenuItem value="Armenian">Armenian</MenuItem>
                <MenuItem value="Assamese">Assamese</MenuItem>
                <MenuItem value="Aymara">Aymara</MenuItem>
                <MenuItem value="Azerbaijani">Azerbaijani</MenuItem>
                <MenuItem value="Bashkir">Bashkir</MenuItem>
                <MenuItem value="Basque">Basque</MenuItem>
                <MenuItem value="Belarusian">Belarusian</MenuItem>
                <MenuItem value="Bengali">Bengali</MenuItem>
                <MenuItem value="Bhutani">Bhutani</MenuItem>
                <MenuItem value="Bihari">Bihari</MenuItem>
                <MenuItem value="Bislama">Bislama</MenuItem>
                <MenuItem value="Bosnian">Bosnian</MenuItem>
                <MenuItem value="Breton">Breton</MenuItem>
                <MenuItem value="Bulgarian">Bulgarian</MenuItem>
                <MenuItem value="Burmese">Burmese</MenuItem>
                <MenuItem value="Catalan">Catalan</MenuItem>
                <MenuItem value="Chinese (Cantonese)">Chinese (Cantonese)</MenuItem>
                <MenuItem value="Chinese (Mandarin)">Chinese (Mandarin)</MenuItem>
                <MenuItem value="Chinese (other)">Chinese (other)</MenuItem>
                <MenuItem value="Corsican">Corsican</MenuItem>
                <MenuItem value="Croatian">Croatian</MenuItem>
                <MenuItem value="Czech">Czech</MenuItem>
                <MenuItem value="Danish">Danish</MenuItem>
                <MenuItem value="Dhivehi">Dhivehi</MenuItem>
                <MenuItem value="Dutch">Dutch</MenuItem>
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="Esperanto">Esperanto</MenuItem>
                <MenuItem value="Estonian">Estonian</MenuItem>
                <MenuItem value="Faroese">Faroese</MenuItem>
                <MenuItem value="Farsi">Farsi</MenuItem>
                <MenuItem value="Fiji">Fiji</MenuItem>
                <MenuItem value="Finnish">Finnish</MenuItem>
                <MenuItem value="French">French</MenuItem>
                <MenuItem value="Frisian">Frisian</MenuItem>
                <MenuItem value="Galician">Galician</MenuItem>
                <MenuItem value="Ganda">Ganda</MenuItem>
                <MenuItem value="Georgian">Georgian</MenuItem>
                <MenuItem value="German">German</MenuItem>
                <MenuItem value="Gree">Greek</MenuItem>
                <MenuItem value="Greenlandic">Greenlandic</MenuItem>
                <MenuItem value="Guarani">Guarani</MenuItem>
                <MenuItem value="Gujarati">Gujarati</MenuItem>
                <MenuItem value="Haitian Creole">Haitian Creole</MenuItem>
                <MenuItem value="Hausa">Hausa</MenuItem>
                <MenuItem value="Hebrew">Hebrew</MenuItem>
                <MenuItem value="Hindi">Hindi</MenuItem>
                <MenuItem value="Hungarian">Hungarian</MenuItem>
                <MenuItem value="Icelandic">Icelandic</MenuItem>
                <MenuItem value="Indonesian">Indonesian</MenuItem>
                <MenuItem value="Inuktitut">Inuktitut</MenuItem>
                <MenuItem value="Inupiak">Inupiak</MenuItem>
                <MenuItem value="Irish">Irish</MenuItem>
                <MenuItem value="Italian">Italian</MenuItem>
                <MenuItem value="Japanese">Japanese</MenuItem>
                <MenuItem value="Javanese">Javanese</MenuItem>
                <MenuItem value="Kannada">Kannada</MenuItem>
                <MenuItem value="Kashmiri">Kashmiri</MenuItem>
                <MenuItem value="Kazakh">Kazakh</MenuItem>
                <MenuItem value="Khmer">Khmer</MenuItem>
                <MenuItem value="Kinyarwanda">Kinyarwanda</MenuItem>
                <MenuItem value="Kirundi">Kirundi</MenuItem>
                <MenuItem value="Korean">Korean</MenuItem>
                <MenuItem value="Kurdish">Kurdish</MenuItem>
                <MenuItem value="Kyrgyz">Kyrgyz</MenuItem>
                <MenuItem value="Laothian">Laothian</MenuItem>
                <MenuItem value="Latin">Latin</MenuItem>
                <MenuItem value="Latvian">Latvian</MenuItem>
                <MenuItem value="Lingala">Lingala</MenuItem>
                <MenuItem value="Lithuanian">Lithuanian</MenuItem>
                <MenuItem value="Macedonian">Macedonian</MenuItem>
                <MenuItem value="Malagasy">Malagasy</MenuItem>
                <MenuItem value="Malay">Malay</MenuItem>
                <MenuItem value="Malayalam">Malayalam</MenuItem>
                <MenuItem value="Maltese">Maltese</MenuItem>
                <MenuItem value="Maori">Maori</MenuItem>
                <MenuItem value="Marathi">Marathi</MenuItem>
                <MenuItem value="Moldavian">Moldavian</MenuItem>
                <MenuItem value="Mongolian">Mongolian</MenuItem>
                <MenuItem value="Nauru">Nauru</MenuItem>
                <MenuItem value="Nepali">Nepali</MenuItem>
                <MenuItem value="Norwegian (Bokmal)">Norwegian (Bokmal)</MenuItem>
                <MenuItem value="Norwegian (Nynorsk)">Norwegian (Nynorsk)</MenuItem>
                <MenuItem value="Oriya">Oriya</MenuItem>
                <MenuItem value="Oromo">Oromo</MenuItem>
                <MenuItem value="Pashto/Pushto">Pashto/Pushto</MenuItem>
                <MenuItem value="Polish">Polish</MenuItem>
                <MenuItem value="Portuguese (Brazil)">Portuguese (Brazil)</MenuItem>
                <MenuItem value="Portuguese">Portuguese (Portugal)</MenuItem>
                <MenuItem value="Punjabi">Punjabi</MenuItem>
                <MenuItem value="Quechua">Quechua</MenuItem>
                <MenuItem value="Rhaeto-Romance">Rhaeto-Romance</MenuItem>
                <MenuItem value="Romanian">Romanian</MenuItem>
                <MenuItem value="Russian">Russian</MenuItem>
                <MenuItem value="Samoan">Samoan</MenuItem>
                <MenuItem value="Sangho">Sangho</MenuItem>
                <MenuItem value="Sanskrit">Sanskrit</MenuItem>
                <MenuItem value="Scots Gaelic">Scots Gaelic</MenuItem>
                <MenuItem value="Serbian">Serbian</MenuItem>
                <MenuItem value="Serbo-Croatian">Serbo-Croatian</MenuItem>
                <MenuItem value="Sesotho">Sesotho</MenuItem>
                <MenuItem value="Setswana">Setswana</MenuItem>
                <MenuItem value="Shona">Shona</MenuItem>
                <MenuItem value="Sindhi">Sindhi</MenuItem>
                <MenuItem value="Sinhalese">Sinhalese</MenuItem>
                <MenuItem value="Siswati">Siswati</MenuItem>
                <MenuItem value="Slovak">Slovak</MenuItem>
                <MenuItem value="Slovenian">Slovenian</MenuItem>
                <MenuItem value="Somali">Somali</MenuItem>
                <MenuItem value="Spanish">Spanish</MenuItem>
                <MenuItem value="Sundanese">Sundanese</MenuItem>
                <MenuItem value="Swahili">Swahili</MenuItem>
                <MenuItem value="Swedish">Swedish</MenuItem>
                <MenuItem value="Tagalog">Tagalog</MenuItem>
                <MenuItem value="Tajik">Tajik</MenuItem>
                <MenuItem value="Tamil">Tamil</MenuItem>
                <MenuItem value="Tatar">Tatar</MenuItem>
                <MenuItem value="Telugu">Telugu</MenuItem>
                <MenuItem value="Thai">Thai</MenuItem>
                <MenuItem value="Tibetan">Tibetan</MenuItem>
                <MenuItem value="Tigrinya">Tigrinya</MenuItem>
                <MenuItem value="Tonga">Tonga</MenuItem>
                <MenuItem value="Tsonga">Tsonga</MenuItem>
                <MenuItem value="Turkish">Turkish</MenuItem>
                <MenuItem value="Turkmen">Turkmen</MenuItem>
                <MenuItem value="Twi">Twi</MenuItem>
                <MenuItem value="Uighur">Uighur</MenuItem>
                <MenuItem value="Ukrainian">Ukrainian</MenuItem>
                <MenuItem value="Urdu">Urdu</MenuItem>
                <MenuItem value="Uzbek">Uzbek</MenuItem>
                <MenuItem value="Vietnamese">Vietnamese</MenuItem>
                <MenuItem value="Volapuk">Volapuk</MenuItem>
                <MenuItem value="Welsh">Welsh</MenuItem>
                <MenuItem value="Wolof">Wolof</MenuItem>
                <MenuItem value="Xhosa">Xhosa</MenuItem>
                <MenuItem value="Yiddish">Yiddish</MenuItem>
                <MenuItem value="Yiddish">Yiddish</MenuItem>
                <MenuItem value="Zhuang">Zhuang</MenuItem>
                <MenuItem value="Zulu">Zulu</MenuItem>
            </Select>
        </FormControl>
    );
}

export default LanguageSelect;