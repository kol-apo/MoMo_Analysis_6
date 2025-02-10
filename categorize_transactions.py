import re

def categorize_transactions(messages):
    categories = {
        "Incoming Money": r"received \d+ RWF",
        "Transfers to Mobile Numbers": r"transferred \d+ RWF to",
        "Airtime Bill Payments": r"payment of \d+ RWF to Bundles and Packs",
        "Payments to Code Holders": r"payment of \d+ RWF to \w+ \d+",
        "Withdrawals from Agents": r"withdrawn \d+ RWF",
    }

    categorized_messages = {category: [] for category in categories}

    for message in messages:
        for category, pattern in categories.items():
            if re.search(pattern, message['body'], re.IGNORECASE):
                categorized_messages[category].append(message)
                break

    return categorized_messages

# Example usage
if __name__ == "__main__":
    cleaned_messages = [...]  # Replace with cleaned messages from clean_data.py
    categorized_messages = categorize_transactions(cleaned_messages)
    for category, messages in categorized_messages.items():
        print(f"{category}: {len(messages)} messages")