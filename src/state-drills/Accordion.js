import React from 'react';

class Accordion extends React.Component {
    static defaultProps = {sections: []};

    state = {
        currentIndex: null,
    }

    handleSetActiveSection = (sectionIndex) => {
        this.setState({currentIndex: sectionIndex})
    }

    renderListItems(section, idx, currentIndex) {
        return (
            <li key={idx}>
                <button onClick={() => this.handleSetActiveSection(idx)}>{section.title}</button>
                {(currentIndex === idx) && <p>{section.content}</p>}
            </li>
        )
    }


    render() {
        const {currentIndex} = this.state
        const {sections} = this.props
        return (
            <ul>
                {sections.map((section, idx) =>
                   this.renderListItems(section, idx, currentIndex)
                )}
            </ul>
        )
    }

}

export default Accordion;