import Feedback from "~popup/feedback"
import ToggleButton from "~popup/toggle-button"

function Control() {
  return (
    <div id="popup-control">
      <div id="control-list">
        <div className="control-item">
          <h3>Hide Feed Recommendations</h3>
          <ToggleButton isActive={true} onToggle={() => null} />
        </div>
        <div className="control-item">
          <h3>Hide Shorts</h3>
          <ToggleButton isActive={true} onToggle={() => null} />
        </div>
        <div className="control-item">
          <h3>Hide Sidebar</h3>
          <ToggleButton isActive={true} onToggle={() => null} />
        </div>
        <div className="control-item">
          <h3>Hide Comments</h3>
          <ToggleButton isActive={true} onToggle={() => null} />
        </div>
      </div>
      <Feedback />
    </div>
  )
}

export default Control
