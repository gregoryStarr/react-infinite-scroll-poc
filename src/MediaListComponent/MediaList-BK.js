import React from 'react';
import {AutoSizer, InfiniteLoader, List} from 'react-virtualized';
import data from './data';

const TOTAL = 50; // total of rows shown un the list

class MediaList extends React.Component {
  constructor() {
    super();
    this.data = data.list;
    this.count = 0;
    this.loaded = [];
    this.timeoutIdMap = {};
    
    this.rowRenderer = this.rowRenderer.bind(this);
    this.isRowLoaded = this.isRowLoaded.bind(this);
    this.loadMoreRows = this.loadMoreRows.bind(this);

  }

  componentWillUnmount() {
    Object.keys(this.timeoutIdMap).forEach((timeout)=>{
      clearTimeout(timeout);
    });
  }


  // there is a blink issue, even tho data and checks are fine, this fn keep in a loop for some reason
  isRowLoaded(props) {
    console.log('index', props.index, 'loaded length:', this.loaded.length, 'isLoaded:', !!this.loaded[props.index]);
    return true;//!!this.loaded[props.index];
  }

  loadMoreRows({startIndex, stopIndex}) {

    const start = this.count;
    const stop = this.count + 10;

    const timeout = setTimeout(() => {
      delete this.timeoutIdMap[timeout];

      /*let list = this.data.slice(start, stop);
      this.loaded = this.loaded.concat(list);
      this.count += 5;


      resolve(this.loaded);*/
      promiseResolver();
    }, 10);

    this.timeoutIdMap[timeout] = true;
    let promiseResolver;

    return new Promise(resolve => {
      promiseResolver = resolve;
    });

  }

  rowRenderer(props) {
    /*let content;
    const media = this.loaded[props.index];
    if (media) {
      content = <div className="row" key={props.key}>{props.index} - {media.uid}</div>;
    }
    else {
      content = <div className="row" key={props.key}>{props.index} Loading...</div>;
    }

    return content;*/

    return <div className="row" key={props.key}>{props.index} content</div>
  }

  render() {
    return (
      <div id="list-container">

        <InfiniteLoader
          isRowLoaded={this.isRowLoaded}
          loadMoreRows={this.loadMoreRows}
          threshold={10}
          rowCount={TOTAL}>
          {({onRowsRendered, registerChild}) => (
            <AutoSizer disableHeight>
              {({width}) => (
                <List
                  ref={registerChild}
                  className="list-container"
                  height={150}
                  onRowsRendered={onRowsRendered}
                  rowCount={TOTAL}
                  rowHeight={TOTAL}
                  rowRenderer={this.rowRenderer}
                  width={width}
                />
              )}
            </AutoSizer>
          )}
        </InfiniteLoader>

      </div>
    );
  }
}

export default MediaList;

