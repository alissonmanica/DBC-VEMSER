import {connect} from 'react-redux';
import * as VideosActions from '../store/actions/video'
import { bindActionCreators } from 'redux';

function Sidebar({modules, handleVideo}) {
  console.log(modules);

  return (
    <aside>
      {modules.map(module => (
        <div key={module.title}>
          <strong>{module.title}</strong>
          <ul>
            {module.videos.map(video => (
              <li key={video.id}>
                <h1>{video.title}</h1>
                <button onClick={() => handleVideo(module, video)}>Selecionar video</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  )
}

const mapStateToProps = state => ({
  modules: state.videoReducer.modules
});

const mapDispatchToProps = dispatch => (
  bindActionCreators(VideosActions, dispatch)
)

export default connect (mapStateToProps, mapDispatchToProps)(Sidebar);