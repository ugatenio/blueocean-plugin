import { ExtensionStore } from 'es-extensions-api';
import { DashboardCards } from './components/DashboardCards';
import { FavoritePipeline } from './components/FavoritePipeline';
import { FavoritePipelineHeader } from './components/FavoritePipelineHeader';
import { PipelineCard } from './components/PipelineCard';

import React from 'react';
import ReactDOM from 'react-dom';
const instance = ExtensionStore.getInstance();
instance.register("jenkins.pipeline.list.top", (div) => {
    ReactDOM.render(<DashboardCards />, div);
})

instance.register("jenkins.pipeline.list.action", (div) => {
    ReactDOM.render(<FavoritePipeline />, div);
})

instance.register("jenkins.pipeline.detail.header.action", (div) => {
    ReactDOM.render(<FavoritePipelineHeader />, div);
})

instance.register("jenkins.pipeline.branches.list.action", (div) => {
    ReactDOM.render(<PipelineCard />, div);
})
console.log('aa');
