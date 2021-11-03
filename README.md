# Minicart Custom Blocks

### interface free-shipping-minicart-baw 
```json
{
    "minicart-base-content": {
        "blocks": ["minicart-empty-state"],
        "children": [
            "free-shipping-minicart-baw"
        ]
    }
}
```



### interface discount-coupon-minicart-baw
```json
{
    "minicart-base-content": {
        "blocks": ["minicart-empty-state"],
        "children": [
            "free-shipping-minicart-baw",
            "discount-coupon-minicart-baw"
        ]
    }
  
}

```
### interface cta-minicart-baw
```json
{
    "flex-layout.col#minicart-footer": {
        "children": [
            "minicart-summary",    
            "cta-minicart-baw", 
            "link#keepBuying"
        ]
    },
  
}

```