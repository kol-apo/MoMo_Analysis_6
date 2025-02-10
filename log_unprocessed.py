def log_unprocessed(messages, categorized_messages):
    unprocessed_messages = []

    for message in messages:
        if not any(message in category_messages for category_messages in categorized_messages.values()):
            unprocessed_messages.append(message)

    # Save to log file
    with open('unprocessed_messages.log', 'w') as f:
        for message in unprocessed_messages:
            f.write(message['body'] + '\n')

# Example usage
if __name__ == "__main__":
    cleaned_messages = [...]  # Replace with cleaned messages from clean_data.py
    categorized_messages = {...}  # Replace with categorized messages from categorize_transactions.py
    log_unprocessed(cleaned_messages, categorized_messages)