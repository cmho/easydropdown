import ClassNames from '../Config/ClassNames';
import State      from '../State/State';

const value = (state: State, classNames: ClassNames) => {
    return (`
        <button
            class="${classNames.value}"
            data-ref="value"
            ${state.isPlaceholderShown ? `aria-placeholder="${state.humanReadableValue}"` : ''}
        >
            ${state.humanReadableValue}
        </button>
    `);
};

export default value;