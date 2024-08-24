type Props = {
  isActive: boolean
  onToggle(): void
}

function ToggleButton({ isActive, onToggle }: Props) {
  return (
    <div className="checkbox-item">
      <label className="checkbox_wrap">
        <input
          type="checkbox"
          name="checkbox"
          className="checkbox_inp"
          checked={isActive}
          onChange={onToggle}
        />
        <span className="checkbox_mark"></span>
      </label>
    </div>
  )
}

export default ToggleButton
