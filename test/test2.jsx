/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-12-07 17:28:22
 * @,@LastEditTime: ,: 2020-12-07 17:38:30
 * @,@LastEditors: ,: Please set LastEditors
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \test\test2.jsx
 */
class MarkdownEditor extends React.Component {
  constructor(props){
    super(props);
    this.md = new Remarkable();
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: 'Hello, **world**!'};
  }
  handleChange(e){
    this.setState({value:e.target.value});
  }
  getRawMarkup(){
    return {_html:this.md.render(this.state.value)};
  }
  render(){
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <label htmlFor="markdown-content">
          Enter some markdown
        </label>
        <textarea
         id="markdown-content"
         onChange={this.handleChange}
         defaultValue={this.state.value}
         ></textarea>
         <h3>Output</h3>
         <div className="content" dangerouslySetInnerHTML={this.getRawMarkup()}></div>
      </div>
    )
  }
}
ReactDOM.render(
  <MarkdownEditor/>,
  document.getElementById('markdown-example')
)