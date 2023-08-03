({
    myAction : function(component, event, helper) {
        component.set("v.Columns", [
            {label:"Name", fieldName:"Name", type:"text" },
            {label:"Amount", fieldName:"Amount__c", type:"text"},
            {label:"Purchase", fieldName:"Purchase__c", type:"text"},
            {label:"Quantity", fieldName:"Quantity__c", type:"text"},
            {label:"Purchase", fieldName:"Purchase__c", type:"text"},
            {label:"Quantity", fieldName:"Quantity__c", type:"text"}
        ]);
        var action = component.get("c.getContacts");
        action.setParams({
            recordId: component.get("v.recordId")
        });
        action.setCallback(this, function(data) {
            component.set("v.Orderrs", data.getReturnValue());
            
        });
        component.set("v.Columns2", [
            {label:"Upcoming Appoinment", fieldName:"Start_Date__c", type:"text"},
        ]);
            
            var action1 = component.get("c.getAppoinment");
            action1.setParams({
            
            recordId: component.get("v.recordId")
            });
            
            action1.setCallback(this, function(data) {
            component.set("v.Appoinment", data.getReturnValue());
            // console.log('Date------------'+component.get("v.Appoinment").length);
            //console.log('Date'+component.get("v.Appoinment"));
            
            });
            
            
            var action2 = component.get("c.getLabel");
            action2.setParams({
            recordId: component.get("v.recordId")
            });
            action2.setCallback(this, function(data) {
            component.set("v.Label", data.getReturnValue());
            var str = component.get("v.Label");
            console.log("Label-============",str);
            });
            
            component.set("v.Columns3", [
            {label:"Age", fieldName:"Age__c", type:"number"},
            {label:"Unique Code", fieldName:"Unique_Code__c", type:"number"},
            {label:"Name", fieldName:"Name", type:"text"},
        ]);
        
        
        var action3 = component.get("c.getData");
        action3.setParams({
            recordId: component.get("v.recordId")
        });
        action3.setCallback(this, function(data) {
            component.set("v.res", data.getReturnValue());
            var fieldNames=component.get("v.res");      
            console.log('****** '+fieldNames);   
            
            var fieldLabel=component.get("v.Label");      
            console.log('****** '+fieldLabel);  
            
            var columnField= [];
            
            for (var i=0; i < fieldNames.length; i++) {
                var column={label: fieldLabel[i],fieldName:fieldNames[i] ,type:"text" }
                console.log("Initialize value in Label ",fieldLabel[i]);
                console.log("Initialize value in column : ",fieldNames[i]);
                columnField.push(column);
            }
                component.set("v.columnsField", columnField);
            console.log("Column List----------",columnField);
        });
        
        
        var action4 = component.get("c.getFData");
        action4.setParams({
            recordId: component.get("v.recordId")
        });
        action4.setCallback(this, function(data) {
            component.set("v.Data", data.getReturnValue());
            var data = component .get("v.Data");
            console.log("Data----------->>>>>",data);
           
        });
        
        
        
        
        $A.enqueueAction(action);
        $A.enqueueAction(action1);
        $A.enqueueAction(action2);
        $A.enqueueAction(action3);
        $A.enqueueAction(action4);
    }
})
