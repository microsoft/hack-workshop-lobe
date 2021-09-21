# Goal 3: Export the model

Congratulations on successfully training and fine-tuning your model! Now it's time to actually use it.

To use the model in the [sample web application], you first need to *export* the model.

## Application notes

### How to export the model
1. In the `Use` tab, select the `Export` button
2. Select `TensorFlow.js`
3. Choose the [/exports](../exports) folder in the project as the destination folder

### Exported model folder structure
There are a few key elements in the main export directory. Your model in json format (model.json), its weights as binary shard files (.bin), and signature.json which contains information about your Lobe project.

This is what the folder structure of your exported model should look like:
```
exports/
  <Project Name> TensorFlowJS/
    example/
      package.json
      tfjsExample.ts
      README.md
    groupN-shardXofY.bin
    labels.txt
    model.json
    signature.json
```

### Move model into web application

Copy the contents from your exported model folder into  `apps/web-bootstrap/public/model` folder in the [sample web application]. 


## Success criteria

Your team will have achieved this goal when the following success criteria are met:

- Your team has exported TensorFlow.js model
- The model files have been moved into the `public/model` directory of the [sample web application]

## Resources

Your team might find these resources helpful:

- [Lobe - Exporting your model](https://www.lobe.ai/docs/export/export)
  
## Tips

- While you don't need the `example/` folder or the `labels.txt` file, moving these into the web application will not cause any problems.

## Final result

After exporting the model and copying it into the web application, you can now move to the final step: [run the web app and use your model](./4-run.md)!

<!-- References -->
[sample web application]: ../apps/web-bootstrap