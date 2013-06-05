from node_types import NodeTypes

class TableOfContentsLayer(object):
    def __init__(self, layer):
        self.layer = layer
        self.node_types = NodeTypes()

    def apply_layer(self, text_index):
        if text_index in self.layer:
            layer_elements = self.layer[text_index]

            toc_list = []
            for element in layer_elements:
                element_url = self.node_types.change_type_names(element['index']);
                toc_list.append({'url': "#%s" % "-".join(element_url),
                'label': element['title']})
            return ('TOC', toc_list)
