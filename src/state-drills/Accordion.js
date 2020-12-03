import React from 'react';

class Accordion extends React.Component {
    static defaultProps = {sections: []};

    state = {
        currentIndex: null,
    }

    handleSetActiveSection = (sectionIndex) => {
        this.setState({currentIndex: sectionIndex})
    }

    renderListItem(section, idx, currentIndex) {
        return (
            <li key={idx}>
                <button onClick={() => this.handleSetActiveSection(idx)}>{section.title}</button>
                {(currentIndex === idx) ? <p>{section.content}</p> : null}
            </li>
        )
    }


    render() {
        const {currentIndex} = this.state
        const {sections} = this.props
        return (
            <ul>
                {sections.map((section, idx) =>
                   this.renderListItem(section, idx, currentIndex)
                )}
            </ul>
        )
    }

}

export default Accordion;