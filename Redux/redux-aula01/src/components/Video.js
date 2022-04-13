import {connect} from 'react-redux';

function Video({activeModule, activeVideo}) {
  
  return (
    <div>
      <h1>Meu modulo atual é {activeModule.title}</h1>
      <h2>Meu Vídeo atual é {activeVideo.title}</h2>
    </div>
  )
}

export default connect(state => ({
  activeModule: state.videoReducer.activeModule,
  activeVideo: state.videoReducer.activeVideo
}))(Video)