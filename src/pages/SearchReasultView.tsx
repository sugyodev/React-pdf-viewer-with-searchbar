import * as React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { searchPlugin } from '@react-pdf-viewer/search';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/search/lib/styles/index.css';

import SearchSidebar from './SearchSidebar';

interface SearchReasultViewProps {
    fileUrl: string;
}

const SearchReasultView: React.FC<SearchReasultViewProps> = ({ fileUrl }) => {
    const searchPluginInstance = searchPlugin();
    const fileName = fileUrl.split('/')[fileUrl.split('/').length - 1];
    return (
        <div
            style={{
                border: '1px solid rgba(0, 0, 0, .3)',
                display: 'flex',
                height: '100%',
                width: '100%',
            }}
        >
            <div
                style={{
                    borderRight: '1px solid rgba(0, 0, 0, .2)',
                    flex: '0 0 15rem',
                    width: '15rem',
                }}
            >
                <SearchSidebar searchPluginInstance={searchPluginInstance} />
            </div>
            <div style={{ flex: 1 }}>
                <h2>{fileName}</h2>
                <div style={{ width: '100%', height: '100%', borderTop: 'solid 1px #eee' }}>
                    <Worker workerUrl="/pdf.worker.min.js" >
                        <Viewer fileUrl={fileUrl} plugins={[searchPluginInstance]} />
                    </Worker>
                </div>
            </div>
        </div>
    );
};

export default SearchReasultView;