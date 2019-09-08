import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { languageSelectStyles } from './styles';

interface CountryOfOriginSelectProps {
    value: string;
    handleChange: any;
}

const CountryOfOriginSelect:React.FunctionComponent<CountryOfOriginSelectProps> = ({ value, handleChange }) => {
    const classes = languageSelectStyles();
    return (
        <FormControl className={classes.select}>
        <InputLabel htmlFor="country">Country of Origin</InputLabel>
            <Select
            value={value}
            onChange={handleChange('countryOfOrigin')}
            inputProps={{
                name: 'Country',
                id: 'countryOfOrigin',
            }}
            >
                <MenuItem value=""></MenuItem>
                <MenuItem value="Afghanistan">Afghanistan</MenuItem>
                <MenuItem value="Albania">Albania</MenuItem>
                <MenuItem value="Algeria">Algeria</MenuItem>
                <MenuItem value="American Samoa">American Samoa</MenuItem>
                <MenuItem value="Andorra">Andorra</MenuItem>
                <MenuItem value="Angola">Angola</MenuItem>
                <MenuItem value="Anguilla">Anguilla</MenuItem>
                <MenuItem value="Antarctica">Antarctica</MenuItem>
                <MenuItem value="Antigua">Antigua</MenuItem>
                <MenuItem value="Argentina">Argentina</MenuItem>
                <MenuItem value="Armenia">Armenia</MenuItem>
                <MenuItem value="Aruba">Aruba</MenuItem>
                <MenuItem value="Ascension Island">Ascension Island</MenuItem>
                <MenuItem value="Australia" selected={true}>Australia</MenuItem>
                <MenuItem value="Austria">Austria</MenuItem>
                <MenuItem value="Azerbaijan">Azerbaijan</MenuItem>
                <MenuItem value="Bahamas">Bahamas</MenuItem>
                <MenuItem value="Bangladesh">Bangladesh</MenuItem>
                <MenuItem value="Barbados">Barbados</MenuItem>
                <MenuItem value="Barbuda">Barbuda</MenuItem>
                <MenuItem value="Belarus">Belarus</MenuItem>
                <MenuItem value="Belgium">Belgium</MenuItem>
                <MenuItem value="Belize">Belize</MenuItem>
                <MenuItem value="Benin">Benin</MenuItem>
                <MenuItem value="Bermuda">Bermuda</MenuItem>
                <MenuItem value="Bhutan">Bhutan</MenuItem>
                <MenuItem value="Bolivia">Bolivia</MenuItem>
                <MenuItem value="Bosnia and Herzegowina">Bosnia and Herzegowina</MenuItem>
                <MenuItem value="Botswana">Botswana</MenuItem>
                <MenuItem value="Brazil">Brazil</MenuItem>
                <MenuItem value="British Virgin Islands">British Virgin Islands</MenuItem>
                <MenuItem value="Brunei Darussalam">Brunei Darussalam</MenuItem>
                <MenuItem value="Bulgaria">Bulgaria</MenuItem>
                <MenuItem value="Burkina Faso">Burkina Faso</MenuItem>
                <MenuItem value="Burundi">Burundi</MenuItem>
                <MenuItem value="Cambodia">Cambodia</MenuItem>
                <MenuItem value="Cameroon">Cameroon</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
                <MenuItem value="Cape Verde Islands">Cape Verde Islands</MenuItem>
                <MenuItem value="Cayman Islands">Cayman Islands</MenuItem>
                <MenuItem value="Central African Republic">Central African Republic</MenuItem>
                <MenuItem value="Chad">Chad</MenuItem>
                <MenuItem value="Chatham Island">Chatham Island</MenuItem>
                <MenuItem value="Chile">Chile</MenuItem>
                <MenuItem value="China">China</MenuItem>
                <MenuItem value="Christmas Island">Christmas Island</MenuItem>
                <MenuItem value="Cocos-Keeling Islands">Cocos-Keeling Islands</MenuItem>
                <MenuItem value="Colombia">Colombia</MenuItem>
                <MenuItem value="Comoros">Comoros</MenuItem>
                <MenuItem value="Congo">Congo</MenuItem>
                <MenuItem value="Cook Islands">Cook Islands</MenuItem>
                <MenuItem value="Costa Rica">Costa Rica</MenuItem>
                <MenuItem value="Cuba">Cuba</MenuItem>
                <MenuItem value="Croatia">Croatia</MenuItem>
                <MenuItem value="Curacao">Curacao</MenuItem>
                <MenuItem value="Cyprus">Cyprus</MenuItem>
                <MenuItem value="Czech Republic">Czech Republic</MenuItem>
                <MenuItem value="Denmark">Denmark</MenuItem>
                <MenuItem value="Diego Garcia">Diego Garcia</MenuItem>
                <MenuItem value="Dominica">Dominica</MenuItem>
                <MenuItem value="Dominican Republic">Dominican Republic</MenuItem>
                <MenuItem value="D'Jibouti">D'Jibouti</MenuItem>
                <MenuItem value="Easter Island">Easter Island</MenuItem>
                <MenuItem value="Ecuador">Ecuador</MenuItem>
                <MenuItem value="Egypt">Egypt</MenuItem>
                <MenuItem value="El Salvador">El Salvador</MenuItem>
                <MenuItem value="Equatorial Guinea">Equatorial Guinea</MenuItem>
                <MenuItem value="Eritrea">Eritrea</MenuItem>
                <MenuItem value="Estonia">Estonia</MenuItem>
                <MenuItem value="Ethiopia">Ethiopia</MenuItem>
                <MenuItem value="Faroe Islands">Faroe Islands</MenuItem>
                <MenuItem value="Falkland Islands">Falkland Islands</MenuItem>
                <MenuItem value="Fiji Islands">Fiji Islands</MenuItem>
                <MenuItem value="Finland">Finland</MenuItem>
                <MenuItem value="France">France</MenuItem>
                <MenuItem value="French Antilles">French Antilles</MenuItem>
                <MenuItem value="French Giuana">French Giuana</MenuItem>
                <MenuItem value="French Polynesia">French Polynesia</MenuItem>
                <MenuItem value="Gabon">Gabon</MenuItem>
                <MenuItem value="Gambia">Gambia</MenuItem>
                <MenuItem value="Georgia">Georgia</MenuItem>
                <MenuItem value="Germany">Germany</MenuItem>
                <MenuItem value="Ghana">Ghana</MenuItem>
                <MenuItem value="Gibraltar">Gibraltar</MenuItem>
                <MenuItem value="Greece">Greece</MenuItem>
                <MenuItem value="Greenland">Greenland</MenuItem>
                <MenuItem value="Grenada">Grenada</MenuItem>
                <MenuItem value="Grenadine Islands">Grenadine Islands</MenuItem>
                <MenuItem value="Guadalupe">Guadalupe</MenuItem>
                <MenuItem value="Guam">Guam</MenuItem>
                <MenuItem value="Guantanamo Bay (Cuba)">Guantanamo Bay (Cuba)</MenuItem>
                <MenuItem value="Guatemala">Guatemala</MenuItem>
                <MenuItem value="Guinea">Guinea</MenuItem>
                <MenuItem value="Guinea-Bissau">Guinea-Bissau</MenuItem>
                <MenuItem value="Guyana">Guyana</MenuItem>
                <MenuItem value="Haiti">Haiti</MenuItem>
                <MenuItem value="Honduras">Honduras</MenuItem>
                <MenuItem value="Hong Kong">Hong Kong</MenuItem>
                <MenuItem value="Hungary">Hungary</MenuItem>
                <MenuItem value="Iceland">Iceland</MenuItem>
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="Indonesia">Indonesia</MenuItem>
                <MenuItem value="Iran">Iran</MenuItem>
                <MenuItem value="Iraq">Iraq</MenuItem>
                <MenuItem value="Ireland">Ireland</MenuItem>
                <MenuItem value="Israel">Israel</MenuItem>
                <MenuItem value="Italy">Italy</MenuItem>
                <MenuItem value="Ivory Coast">Ivory Coast</MenuItem>
                <MenuItem value="Jamaica">Jamaica</MenuItem>
                <MenuItem value="Japan">Japan</MenuItem>
                <MenuItem value="Jordan">Jordan</MenuItem>
                <MenuItem value="Kazakhstan">Kazakhstan</MenuItem>
                <MenuItem value="Kenya">Kenya</MenuItem>
                <MenuItem value="Kiribati">Kiribati</MenuItem>
                <MenuItem value="Korea (Republic of)">Korea (Republic of)</MenuItem>
                <MenuItem value="Kuwait">Kuwait</MenuItem>
                <MenuItem value="Kyrgyz Republic">Kyrgyz Republic</MenuItem>
                <MenuItem value="Laos">Laos</MenuItem>
                <MenuItem value="Latvia">Latvia</MenuItem>
                <MenuItem value="Lebanon">Lebanon</MenuItem>
                <MenuItem value="Lesotho">Lesotho</MenuItem>
                <MenuItem value="Liberia">Liberia</MenuItem>
                <MenuItem value="Libya">Libya</MenuItem>
                <MenuItem value="Liechtenstein">Liechtenstein</MenuItem>
                <MenuItem value="Lithuania">Lithuania</MenuItem>
                <MenuItem value="Luxembourg">Luxembourg</MenuItem>
                <MenuItem value="Macau">Macau</MenuItem>
                <MenuItem value="Macedonia">Macedonia</MenuItem>
                <MenuItem value="Madagascar">Madagascar</MenuItem>
                <MenuItem value="Malawi">Malawi</MenuItem>
                <MenuItem value="Malaysia">Malaysia</MenuItem>
                <MenuItem value="Maldives">Maldives</MenuItem>
                <MenuItem value="Mali">Mali</MenuItem>
                <MenuItem value="Malta">Malta</MenuItem>
                <MenuItem value="Marshall Islands">Marshall Islands</MenuItem>
                <MenuItem value="Martinique">Martinique</MenuItem>
                <MenuItem value="Mauritania">Mauritania</MenuItem>
                <MenuItem value="Mauritus">Mauritus</MenuItem>
                <MenuItem value="Mayotte Island">Mayotte Island</MenuItem>
                <MenuItem value="Mexico">Mexico</MenuItem>
                <MenuItem value="Micronesia">Micronesia</MenuItem>
                <MenuItem value="Midway Island">Midway Island</MenuItem>
                <MenuItem value="Moldova (Republic of)">Moldova (Republic of)</MenuItem>
                <MenuItem value="Monaco">Monaco</MenuItem>
                <MenuItem value="Mongolia">Mongolia</MenuItem>
                <MenuItem value="Montserat">Montserat</MenuItem>
                <MenuItem value="Morocco">Morocco</MenuItem>
                <MenuItem value="Mozambique">Mozambique</MenuItem>
                <MenuItem value="Myanmar">Myanmar</MenuItem>
                <MenuItem value="Namibia">Namibia</MenuItem>
                <MenuItem value="Nauru">Nauru</MenuItem>
                <MenuItem value="Nepal">Nepal</MenuItem>
                <MenuItem value="Netherlands">Netherlands</MenuItem>
                <MenuItem value="Netherlands Antilles">Netherlands Antilles</MenuItem>
                <MenuItem value="Nevis">Nevis</MenuItem>
                <MenuItem value="New Caledonia">New Caledonia</MenuItem>
                <MenuItem value="New Zealand">New Zealand</MenuItem>
                <MenuItem value="Nicaragua">Nicaragua</MenuItem>
                <MenuItem value="Niger">Niger</MenuItem>
                <MenuItem value="Nigeria">Nigeria</MenuItem>
                <MenuItem value="Niue">Niue</MenuItem>
                <MenuItem value="Norfolk Island">Norfolk Island</MenuItem>
                <MenuItem value="Northern Marianas Islands">Northern Marianas Islands</MenuItem>
                <MenuItem value="Norway">Norway</MenuItem>
                <MenuItem value="Oman">Oman</MenuItem>
                <MenuItem value="Pakistan">Pakistan</MenuItem>
                <MenuItem value="Palau">Palau</MenuItem>
                <MenuItem value="Palestine">Palestine</MenuItem>
                <MenuItem value="Panama">Panama</MenuItem>
                <MenuItem value="Papua New Guinea">Papua New Guinea</MenuItem>
                <MenuItem value="Paraguay">Paraguay</MenuItem>
                <MenuItem value="Peru">Peru</MenuItem>
                <MenuItem value="Philippines">Philippines</MenuItem>
                <MenuItem value="Poland">Poland</MenuItem>
                <MenuItem value="Portugal">Portugal</MenuItem>
                <MenuItem value="Puerto Rico">Puerto Rico</MenuItem>
                <MenuItem value="Qatar">Qatar</MenuItem>
                <MenuItem value="Réunion Island">Réunion Island</MenuItem>
                <MenuItem value="Romania">Romania</MenuItem>
                <MenuItem value="Russian Federation">Russian Federation</MenuItem>
                <MenuItem value="Rwanda">Rwanda</MenuItem>
                <MenuItem value="San Marino">San Marino</MenuItem>
                <MenuItem value="Sao Tome and Principe">Sao Tome and Principe</MenuItem>
                <MenuItem value="Saudi Arabia">Saudi Arabia</MenuItem>
                <MenuItem value="Senegal">Senegal</MenuItem>
                <MenuItem value="Serbia">Serbia</MenuItem>
                <MenuItem value="Seychelles">Seychelles</MenuItem>
                <MenuItem value="Sierra Leone">Sierra Leone</MenuItem>
                <MenuItem value="Singapore">Singapore</MenuItem>
                <MenuItem value="Slovakia">Slovakia</MenuItem>
                <MenuItem value="Slovenia">Slovenia</MenuItem>
                <MenuItem value="Solomon Islands">Solomon Islands</MenuItem>
                <MenuItem value="Somalia">Somalia</MenuItem>
                <MenuItem value="South Africa">South Africa</MenuItem>
                <MenuItem value="Spain">Spain</MenuItem>
                <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
                <MenuItem value="St. Helena">St. Helena</MenuItem>
                <MenuItem value="St. Kitts">St. Kitts</MenuItem>
                <MenuItem value="St. Lucia">St. Lucia</MenuItem>
                <MenuItem value="St. Pierre et Miquelon">St. Pierre et Miquelon</MenuItem>
                <MenuItem value="Sudan">Sudan</MenuItem>
                <MenuItem value="Suriname">Suriname</MenuItem>
                <MenuItem value="Swaziland">Swaziland</MenuItem>
                <MenuItem value="Sweden">Sweden</MenuItem>
                <MenuItem value="Switzerland">Switzerland</MenuItem>
                <MenuItem value="Syria">Syria</MenuItem>
                <MenuItem value="Tahiti">Tahiti</MenuItem>
                <MenuItem value="Taiwan">Taiwan</MenuItem>
                <MenuItem value="Tajikistan">Tajikistan</MenuItem>
                <MenuItem value="Tanzania">Tanzania</MenuItem>
                <MenuItem value="Thailand">Thailand</MenuItem>
                <MenuItem value="Timor-Leste">Timor-Leste</MenuItem>
                <MenuItem value="Togo">Togo</MenuItem>
                <MenuItem value="Tokelau Islands">Tokelau Islands</MenuItem>
                <MenuItem value="Tonga Islands">Tonga Islands</MenuItem>
                <MenuItem value="Trinidad and Tobago">Trinidad and Tobago</MenuItem>
                <MenuItem value="Tunisia">Tunisia</MenuItem>
                <MenuItem value="Turkey">Turkey</MenuItem>
                <MenuItem value="Turkmenistan">Turkmenistan</MenuItem>
                <MenuItem value="Turks and Caicos Islands">Turks and Caicos Islands</MenuItem>
                <MenuItem value="Tuvalu">Tuvalu</MenuItem>
                <MenuItem value="Uganda">Uganda</MenuItem>
                <MenuItem value="Ukraine">Ukraine</MenuItem>
                <MenuItem value="United Arab Emirates">United Arab Emirates</MenuItem>
                <MenuItem value="United Kingdom">United Kingdom</MenuItem>
                <MenuItem value="United States">United States</MenuItem>
                <MenuItem value="Uruguay">Uruguay</MenuItem>
                <MenuItem value="US Virgin Islands">US Virgin Islands</MenuItem>
                <MenuItem value="Uzbekistan">Uzbekistan</MenuItem>
                <MenuItem value="Vanuatu">Vanuatu</MenuItem>
                <MenuItem value="Vatican City">Vatican City</MenuItem>
                <MenuItem value="Venezuela">Venezuela</MenuItem>
                <MenuItem value="Vietnam">Vietnam</MenuItem>
                <MenuItem value="Wake Island">Wake Island</MenuItem>
                <MenuItem value="Wallis and Futuna Islands">Wallis and Futuna Islands</MenuItem>
                <MenuItem value="Western Samoa">Western Samoa</MenuItem>
                <MenuItem value="Yemen-Arab Republic">Yemen-Arab Republic</MenuItem>
                <MenuItem value="Zambia">Zambia</MenuItem>
                <MenuItem value="Zanzibar">Zanzibar</MenuItem>
                <MenuItem value="Zimbawe">Zimbawe</MenuItem>
            </Select>
        </FormControl>
    );
}

export default CountryOfOriginSelect;