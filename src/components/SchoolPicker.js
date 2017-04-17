import React from 'react'
import {
  Typeahead
}
from 'react-typeahead'

const schoolOptions = ['ADMIRALTY PRIMARY SCHOOL', 'AHMAD IBRAHIM PRIMARY SCHOOL', 'AI TONG SCHOOL', 'ALEXANDRA PRIMARY SCHOOL', 'ANCHOR GREEN PRIMARY SCHOOL', 'ANDERSON PRIMARY SCHOOL', 'ANG MO KIO PRIMARY SCHOOL', 'ANGLO-CHINESE SCHOOL (JUNIOR)', 'ANGLO-CHINESE SCHOOL (PRIMARY)', 'ANGSANA PRIMARY SCHOOL', 'BALESTIER HILL PRIMARY SCHOOL', 'BEACON PRIMARY SCHOOL', 'BEDOK GREEN PRIMARY SCHOOL', 'BENDEMEER PRIMARY SCHOOL', 'BLANGAH RISE PRIMARY SCHOOL', 'BOON LAY GARDEN PRIMARY SCHOOL', 'BUKIT PANJANG PRIMARY SCHOOL', 'BUKIT TIMAH PRIMARY SCHOOL', 'BUKIT VIEW PRIMARY SCHOOL', 'CANBERRA PRIMARY SCHOOL', 'CANOSSA CONVENT PRIMARY SCHOOL', 'CANTONMENT PRIMARY SCHOOL', 'CASUARINA PRIMARY SCHOOL', 'CEDAR PRIMARY SCHOOL', 'CHANGKAT PRIMARY SCHOOL', 'CHIJ (KATONG) PRIMARY', 'CHIJ (KELLOCK)', 'CHIJ OUR LADY OF GOOD COUNSEL', 'CHIJ OUR LADY OF THE NATIVITY', 'CHIJ OUR LADY QUEEN OF PEACE', 'CHIJ PRIMARY (TOA PAYOH)', 'CHONGFU SCHOOL', 'CHONGZHENG PRIMARY SCHOOL', 'CHUA CHU KANG PRIMARY SCHOOL', 'CLEMENTI PRIMARY SCHOOL', 'COMPASSVALE PRIMARY SCHOOL', 'CONCORD PRIMARY SCHOOL', 'CORAL PRIMARY SCHOOL', 'CORPORATION PRIMARY SCHOOL', 'DA QIAO PRIMARY SCHOOL', 'DAMAI PRIMARY SCHOOL', 'DAZHONG PRIMARY SCHOOL', 'DE LA SALLE SCHOOL', 'EAST COAST PRIMARY SCHOOL', 'EAST SPRING PRIMARY SCHOOL', 'EAST VIEW PRIMARY SCHOOL', 'EDGEFIELD PRIMARY SCHOOL', 'ELIAS PARK PRIMARY SCHOOL', 'ENDEAVOUR PRIMARY SCHOOL', 'EUNOS PRIMARY SCHOOL', 'EVERGREEN PRIMARY SCHOOL', 'FAIRFIELD METHODIST SCHOOL (PRIMARY)', 'FARRER PARK PRIMARY SCHOOL', 'FENGSHAN PRIMARY SCHOOL', 'FERNVALE PRIMARY SCHOOL', 'FIRST TOA PAYOH PRIMARY SCHOOL', 'FRONTIER PRIMARY SCHOOL', 'FUCHUN PRIMARY SCHOOL', 'FUHUA PRIMARY SCHOOL', 'GAN ENG SENG PRIMARY SCHOOL', 'GEYLANG METHODIST SCHOOL (PRIMARY)', 'GONGSHANG PRIMARY SCHOOL', 'GREENDALE PRIMARY SCHOOL', 'GREENRIDGE PRIMARY SCHOOL', 'GREENWOOD PRIMARY SCHOOL', 'GUANGYANG PRIMARY SCHOOL', "HAIG GIRLS' SCHOOL", 'HENRY PARK PRIMARY SCHOOL', "HOLY INNOCENTS' PRIMARY SCHOOL", 'HONG WEN SCHOOL', 'HORIZON PRIMARY SCHOOL', 'HOUGANG PRIMARY SCHOOL', 'HUAMIN PRIMARY SCHOOL', 'INNOVA PRIMARY SCHOOL', 'JIEMIN PRIMARY SCHOOL', 'JING SHAN PRIMARY SCHOOL', 'JUNYUAN PRIMARY SCHOOL', 'JURONG PRIMARY SCHOOL', 'JURONG WEST PRIMARY SCHOOL', 'JUYING PRIMARY SCHOOL', 'KEMING PRIMARY SCHOOL', 'KHENG CHENG SCHOOL', 'KONG HWA SCHOOL', 'KRANJI PRIMARY SCHOOL', 'KUO CHUAN PRESBYTERIAN PRIMARY SCHOOL', 'LAKESIDE PRIMARY SCHOOL', 'LIANHUA PRIMARY SCHOOL', 'LOYANG PRIMARY SCHOOL', 'MACPHERSON PRIMARY SCHOOL', 'MAHA BODHI SCHOOL', 'MARSILING PRIMARY SCHOOL', 'MARYMOUNT CONVENT SCHOOL', 'MAYFLOWER PRIMARY SCHOOL', 'MEE TOH SCHOOL', 'MERIDIAN PRIMARY SCHOOL', 'MONTFORT JUNIOR SCHOOL', 'NAN CHIAU PRIMARY SCHOOL', 'NAN HUA PRIMARY SCHOOL', 'NANYANG PRIMARY SCHOOL', 'NAVAL BASE PRIMARY SCHOOL', 'NEW TOWN PRIMARY SCHOOL', 'NGEE ANN PRIMARY SCHOOL', 'NORTH SPRING PRIMARY SCHOOL', 'NORTH VIEW PRIMARY SCHOOL', 'NORTH VISTA PRIMARY SCHOOL', 'NORTHLAND PRIMARY SCHOOL', 'NORTHOAKS PRIMARY SCHOOL', 'OASIS PRIMARY SCHOOL', 'OPERA ESTATE PRIMARY SCHOOL', 'PALM VIEW PRIMARY SCHOOL', 'PARK VIEW PRIMARY SCHOOL', 'PASIR RIS PRIMARY SCHOOL', "PAYA LEBAR METHODIST GIRLS' SCHOOL (PRIMARY)", 'PEI CHUN PUBLIC SCHOOL', 'PEI HWA PRESBYTERIAN PRIMARY SCHOOL', 'PEI TONG PRIMARY SCHOOL', 'PEIYING PRIMARY SCHOOL', 'PIONEER PRIMARY SCHOOL', 'POI CHING SCHOOL', 'PRINCESS ELIZABETH PRIMARY SCHOOL', 'PUNGGOL COVE PRIMARY SCHOOL', 'PUNGGOL GREEN PRIMARY SCHOOL', 'PUNGGOL PRIMARY SCHOOL', 'PUNGGOL VIEW PRIMARY SCHOOL', 'QIFA PRIMARY SCHOOL', 'QIHUA PRIMARY SCHOOL', 'QUEENSTOWN PRIMARY SCHOOL', 'RADIN MAS PRIMARY SCHOOL', "RAFFLES GIRLS' PRIMARY SCHOOL", 'RED SWASTIKA SCHOOL', 'RIVER VALLEY PRIMARY SCHOOL', 'RIVERSIDE PRIMARY SCHOOL', 'RIVERVALE PRIMARY SCHOOL', 'ROSYTH SCHOOL', 'RULANG PRIMARY SCHOOL', 'SEMBAWANG PRIMARY SCHOOL', 'SENG KANG PRIMARY SCHOOL', 'SENGKANG GREEN PRIMARY SCHOOL', 'SHUQUN PRIMARY SCHOOL', 'SI LING PRIMARY SCHOOL', 'SOUTH VIEW PRIMARY SCHOOL', 'SPRINGDALE PRIMARY SCHOOL', "ST ANDREW'S JUNIOR SCHOOL", "ST ANTHONY'S CANOSSIAN PRIMARY SCHOOL", "ST ANTHONY'S PRIMARY SCHOOL", "ST GABRIEL'S PRIMARY SCHOOL", "ST HILDA'S PRIMARY SCHOOL", "ST JOSEPH'S INSTITUTION JUNIOR", "ST MARGARET'S PRIMARY SCHOOL", "ST STEPHEN'S SCHOOL", 'STAMFORD PRIMARY SCHOOL', 'TAMPINES NORTH PRIMARY SCHOOL', 'TAMPINES PRIMARY SCHOOL', 'TANJONG KATONG PRIMARY SCHOOL', 'TAO NAN SCHOOL', 'TECK GHEE PRIMARY SCHOOL', 'TECK WHYE PRIMARY SCHOOL', 'TELOK KURAU PRIMARY SCHOOL', 'TEMASEK PRIMARY SCHOOL', 'TOWNSVILLE PRIMARY SCHOOL', 'UNITY PRIMARY SCHOOL', 'WATERWAY PRIMARY SCHOOL', 'WELLINGTON PRIMARY SCHOOL', 'WEST GROVE PRIMARY SCHOOL', 'WEST SPRING PRIMARY SCHOOL', 'WEST VIEW PRIMARY SCHOOL', 'WESTWOOD PRIMARY SCHOOL', 'WHITE SANDS PRIMARY SCHOOL', 'WOODGROVE PRIMARY SCHOOL', 'WOODLANDS PRIMARY SCHOOL', 'WOODLANDS RING PRIMARY SCHOOL', 'XINGHUA PRIMARY SCHOOL', 'XINGNAN PRIMARY SCHOOL', 'XINMIN PRIMARY SCHOOL', 'XISHAN PRIMARY SCHOOL', 'YANGZHENG PRIMARY SCHOOL', 'YEW TEE PRIMARY SCHOOL', 'YIO CHU KANG PRIMARY SCHOOL', 'YISHUN PRIMARY SCHOOL', 'YU NENG PRIMARY SCHOOL', 'YUHUA PRIMARY SCHOOL', 'YUMIN PRIMARY SCHOOL', 'ZHANGDE PRIMARY SCHOOL', 'ZHENGHUA PRIMARY SCHOOL', 'ZHONGHUA PRIMARY SCHOOL', 'CATHOLIC HIGH SCHOOL', "CHIJ ST NICHOLAS GIRLS' SCHOOL", "METHODIST GIRLS' SCHOOL", "SINGAPORE CHINESE GIRLS' PRIMARY SCHOOL", 'St Joseph’s Institution Junior']

class SchoolPicker extends React.Component {
  constructor () {
    super()
    this.goToSchool = this.goToSchool.bind(this)
  }
  goToSchool (event) {
    event.preventDefault()
    const schoolId = this.typeHeadInput.state.entryValue
    if (schoolOptions.includes(schoolId)) {
      this.props.history.push(`/school/${schoolId}`)
    }
  }

  render () {
    return (
      <div>
        <form className='school-selector' onSubmit={this.goToSchool}>
          <h2 className='title'>Please Select Your School From The List</h2>
          <Typeahead options={schoolOptions} name='school' maxVisible={5} placeholder='Type and choose' ref={(input) => { this.typeHeadInput = input }} />
          <button type='submit' className='full-btn'>Submit</button>
        </form>
        <div className='text'>
          <h4><i className='fa fa-desktop' />&nbsp;For an optimal viewing experience, please vist this site on a computer.</h4><br />
          <a href='https://drive.google.com/file/d/0B6lxIDYEiSbJUS1VQm1fbHNRV0k/view?usp=sharing' target='_blank' className='help'><i className='fa fa-info-circle' />&nbsp;Help / Instructions</a>
        </div>
      </div>
    )
  }
}

SchoolPicker.contextTypes = {
  router: React.PropTypes.object
}

export default SchoolPicker
